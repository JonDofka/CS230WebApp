import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(private authService:AuthService){

  }

  public onSubmit(data: NgForm) {
    this.authService.signup(data.value.email, data.value.password).subscribe(data => {
      console.log(data);
    })
  }
}
