import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://127.0.0.1:8001/api/student');
  }

  getCourses() {
    return this.http.get('http://127.0.0.1:8001/api/student/courses');
  }

  insertStudent(data: any) {
    return this.http.post('http://127.0.0.1:8001/api/student/insert', data);
  }

  deleteData(id: any) {
    return this.http.delete('http://127.0.0.1:8001/api/student/delete/' + id);
  }

  getStudentById(id: any) {
    return this.http.get('http://127.0.0.1:8001/api/student/' + id);
  }

  updateStudent(id: any, data: any) {
    return this.http.put('http://127.0.0.1:8001/api/student/update/' + id, data);
  }

  getVideo() {
    return this.http.get('https://vimeo.com/api/oembed.json?url=https://vimeo.com/688486307');
    //return this.http.get('https://vimeo.com/684675242');
  }

}
