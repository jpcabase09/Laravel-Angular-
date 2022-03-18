import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  }

  public error: any = [];

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.signup(this.form).subscribe(
      data => this.handelResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }

  handelResponse(data: any) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/student');
  }

  ngOnInit(): void {
  }

}

