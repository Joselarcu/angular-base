import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'bs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    errorMessage: string = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(formValue) {

    }
    logout() {

    }
    loginWithFacebook() {

    }
    loginWithGoogle() {

    }
    loginWithTwitter() {

    }

    

}
