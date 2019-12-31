import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA1BAS6I_F7a-gEGUpOssFE_WZXTfpuSwQ',
            {email,
            password,
            returnSecureToken: true
            }
        )
        .pipe(catchError(this.handleError),
        tap(
            resData => {
                this.handleAuthedication(resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            })
        );
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA1BAS6I_F7a-gEGUpOssFE_WZXTfpuSwQ',
            {
                email,
                password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError),
        tap(
            resData => {
                console.log('inside login authService');
                this.handleAuthedication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                );
            }));
    }

    handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email not found!';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Wrong Password!!';
                break;
            case 'USER_DISABLED':
                errorMessage = 'Your account has beed disabled!';
                break;
        }
        return throwError(errorMessage);
    }

    private handleAuthedication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
            email,
            userId,
            token,
            expirationDate
        );
        this.user.next(user);
        console.log(this.user);
    }
}
