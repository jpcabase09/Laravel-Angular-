import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'http://127.0.0.1:8001/api';

  constructor(private http: HttpClient) { }

  signup(data: any) {
    //  return this.http.post('http://127.0.0.1:8001/api/signup', data)
    return this.http.post(`${this.baseUrl}/signup`, data)
  }

  login(data: any) {
    return this.http.post('http://127.0.0.1:8001/api/login', data)
  }

}
