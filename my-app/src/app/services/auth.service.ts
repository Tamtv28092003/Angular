import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signin(email: string, password: string) {
    const signinData = {
      email: email,
      password: password,
    };

    return this.http.post('http://localhost:8080/api/signin', signinData);
  }
  signup(name: string, email: string, password: string, confirmPassword: string) {
    const signinData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    return this.http.post('http://localhost:8080/api/signup', signinData);
  }
}
