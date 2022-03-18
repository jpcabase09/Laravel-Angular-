<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SignUpRequest;
use App\Http\Requests\StudentRequest;
use App\Models\Student;
use App\Models\Course;
use App\Models\User;

class StudentController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function getStudents(){
        $students = Student::with(['user', 'course'])->get();

        return $students;
    }

    public function addStudent(StudentRequest $request)
    {

        $user = new User;
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = bcrypt($request->get('password'));


        if($user->save()){
            $student = new Student;
            $student->user_id = $user->id;
            $student->course_id = $request->get('course_id');
            $student->year = $request->get('year');
            $student->address = $request->get('address');
            $student->age = $request->get('age');
            $student->contact_number = $request->get('contact_number');
            $student->gender = $request->get('gender');

            if($student->save()){
                return response()->json([
                    'status' => 'success',
                    'user' => $user,
                    'student' => $student
                ]);
            }
        }
        return response()->json([
            'status' => 'failed'
        ]);
    }

    public function getCourses(){
        $courses = Course::get();

        return $courses;
    }

    public function deleteStudent(Request $request, $id){
        $user = User::find($id);
        $student = Student::where('user_id', $user->id)->first();

        $student1 = Student::find($student->id);

        if(is_null($student1)){
            return response()->json([
                'message' => 'Student not found'
            ], 404);
        }

        $student->delete();
        return response()->json(['status' => 'successfully deleted'], 200);
    }

    public function getStudentById($id)
    {
        $user = User::where('id', $id)->first()->toArray();
        $student = Student::where('user_id', $id)->first()->toArray();

        $var = array_merge($user, $student);

        return $var;
    }

    public function updateEmployee(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = bcrypt($request->get('password'));
        $user->save();

        $student = Student::where('user_id', $id)->first();
        $student->user_id = $user->id;
        $student->course_id = $request->get('course_id');
        $student->year = $request->get('year');
        $student->address = $request->get('address');
        $student->age = $request->get('age');
        $student->contact_number = $request->get('contact_number');
        $student->gender = $request->get('gender');
        $student->save();

        return response()->json(['status' => 'successfully updated'], 200);

    }


}