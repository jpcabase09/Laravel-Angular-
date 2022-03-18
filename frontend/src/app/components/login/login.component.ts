import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit() {

    this.Jarwis.login(this.form).subscribe(
      data => this.handelResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error: any) {
    this.error = error.error.error;

  }

  handelResponse(data: any) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/student');
  }

  ngOnInit(): void {
  }

}
