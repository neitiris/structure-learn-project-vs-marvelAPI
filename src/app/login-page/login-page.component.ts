import { Component } from '@angular/core';
import { AuthService } from '../../services/';
import { IAuthData } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public user = {email: '', password: ''};
  constructor(
    private router: Router,
    private authservice: AuthService,
  ) {}
  // Calling Exit function from AuthService
  public quit() {
    this.authservice.logOutFunk();
  }
  // Calling boolean status variable logged from AuthService
  public lLogged() {
    console.log(this.authservice.logged);
    return this.authservice.logged;
  }
  // Calling authorisation function from AuthService
  public auth(user) {
    this.authservice.authenticate(user).subscribe(
      (userdata: any) => {
        console.log('resp', userdata);
        if (userdata && userdata.data && userdata.data.authToken) {
          localStorage. setItem('currentUser', JSON.stringify(userdata.data));
          this.user.email = userdata.data.email;
          console.log('Login Sucsess');
          this.router.navigate([ '', 'home']);
        }
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
}
