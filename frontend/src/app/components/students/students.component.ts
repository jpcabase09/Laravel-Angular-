import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Student } from './../../student';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  courses: any;

  students: any;
  student = new Student();
  selectedCategory: any;
  message: boolean = false;
  alert: boolean = false;

  public error: any = [];

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null,
    course_id: null,
    year: null,
    address: null,
    age: null,
    contact_number: null,
    gender: null,
  }



  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getStudentData();
    this.getCourses();
  }

  getStudentData() {
    this.dataService.getData().subscribe(res =>
      this.students = res
    );
  }

  getCourses() {
    this.dataService.getCourses().subscribe(res1 =>
      this.courses = res1
    );
  }

  addStudent() {
    this.dataService.insertStudent(this.student).subscribe(
      res => {
        this.getStudentData(),
          this.alert = true;
        setTimeout(() => {
          this.router.navigateByUrl('/student');
        }, 2000);  //5s

      }, error => this.handleError(error))
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }

  onDisplayCategory() {
    console.log("change works");
    console.log(this.selectedCategory)
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getStudentData();
    })
  }

}
