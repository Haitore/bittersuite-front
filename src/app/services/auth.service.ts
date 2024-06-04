import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'https://bittersuite-back.onrender.com/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const route = `${this.baseUrl}/login`;
    const body = { email, password };
    console.log(body);
    
    return this.http.post<any>(route, body);
  }
}
