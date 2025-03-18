import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login';
  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }
  private apiUrlRegister = 'http://localhost:4000/api/users/register2';

  registerUser(credentials: {
    email: string;
    age: string;
    name: string;
  }): Observable<any> {
    return this.http.post(this.apiUrlRegister, credentials);
  }
}
