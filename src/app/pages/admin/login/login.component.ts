import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: { userName: string, password: string } = {
    userName: "",
    password: "",
  }

  constructor(private router: Router) {

  }

  onLogin() {
    if (this.loginData.userName === 'admin' && this.loginData.password === '12345') {
      this.router.navigateByUrl('/test');
    } else {
      alert("Wrong Credentials!");
    }
  }

}
