import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
  }

  checkConfirmPassword(password: string, password_confirm: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[password];
      let pass2 = group.controls[password_confirm];
      if (pass1.value != pass2.value) {
        return pass2.setErrors({ notEqual: true });
      }
      else {
        return pass2.setErrors(null);
      }
    }
  }

  createForm() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkConfirmPassword('password', 'confirmPassword') }
    );
  }

  signup(userData) {
    this.userService.create(userData);
  }

}
