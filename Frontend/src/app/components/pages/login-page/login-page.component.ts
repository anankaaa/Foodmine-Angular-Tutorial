import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //email form-control with validators
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    //to reach email, you have to write: loginForm.controls.email -> we create a getter instead
  }
  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    alert(`email: ${this.fc.email.value} ,
      password: ${this.fc.password.value}`);

    /* this.userService
      .login({ email: this.fc.email.value, password: this.fc.password.value })
      .subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      }); */
  }
}
