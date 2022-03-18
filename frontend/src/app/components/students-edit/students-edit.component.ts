import { Student } from './../../student';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  id: any;
  data: any;
  student = new Student();
  courses: any;
  alert: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id
    this.getData();
    this.getCourses();
  }

  getCourses() {
    this.dataService.getCourses().subscribe(res1 =>
      this.courses = res1
    );
  }

  getData() {
    this.dataService.getStudentById(this.id).subscribe(res => {
      this.data = res;
      this.student = this.data;
      console.log(res);
    });
  }

  updateStudent() {
    this.dataService.updateStudent(this.id, this.student).subscribe(res => {
      this.alert = true;

      setTimeout(() => {
        this.router.navigateByUrl('/student');
      }, 2000);  //5s

    });
  }

}
