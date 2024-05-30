import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getReport(): Observable<any[]> {
    const route = this.baseUrl + '/sales'
    return this.http.get<any[]>(route)
  }
}