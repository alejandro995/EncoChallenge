import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({});


  constructor(private fb: FormBuilder, private listService: ListServiceService ) {
    this.initForm()
  }

  ngOnInit(): void {
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  setLogin() {
    const userIDControl = this.loginForm.controls['username'].value;
    const passwordControl = this.loginForm.controls['password'].value;

    if(!this.listService.login(userIDControl, passwordControl)){
      this.loginForm.setErrors({'invalid' : true})
    }
  }
}
