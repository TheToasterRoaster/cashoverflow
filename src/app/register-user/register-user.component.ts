import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../../register.service';
import { Observable, ObservedValueOf } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),

  });

  constructor(
    private regServ: RegisterService

  ) {}

  ngOnInit(): void {
  }

  register() {
    this.regServ.sendRegisterData(this.registerForm.value).subscribe(
      (data) => {
        console.log('Form submitted successfully');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
}
