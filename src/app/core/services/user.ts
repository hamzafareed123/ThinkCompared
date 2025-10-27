import { Injectable } from '@angular/core';
import { Login, SignUp } from '../../../dataTypes';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class User {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private route: Router) {}

  onSignUp(data: SignUp) {
    return this.http.post(this.url, data, { observe: 'response' }).pipe(
      tap((response: any) => {
        if (response && response.body) {
          console.log(response.body)
           const user = response.body;
          localStorage.setItem("user", JSON.stringify(user));
        }
      })
    );
  }

  onLoginIn(data: Login) {
    return this.http
      .get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`, {
        observe: 'response',
      })
      .pipe(
        tap((response: any) => {
          console.log(response);
          if (response && response.body && response.body.length) {
            this.route.navigate(['/']);
            localStorage.setItem('user', JSON.stringify(response.body));
          }
        })
      );
  }
}
