import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  user;
  wrongCredentialsMessage;

  constructor(private companyService:CompanyService, private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.wrongCredentialsMessage = '';
    this.companyService.login(this.username, this.password)
      .subscribe(
        data => {
          console.log('login user', data);
          this.user = data;
          this.router.navigateByUrl('/companies/list');
        },
        error => {
          console.log("Error", error);
          this.wrongCredentialsMessage = 'Wrong username or password';
        }
      );
  }

}
