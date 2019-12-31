import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent  implements OnInit {
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    authForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.authForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        console.log(this.authForm);
        if (this.authForm.invalid) {
            return;
        }
        const email = this.authForm.value.email;
        const password = this.authForm.value.password;
        this.isLoading = true;

        let authObs: Observable<AuthResponseData>;

        if (!this.isLoginMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(
            resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/buff-list']);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        );
    }
}
