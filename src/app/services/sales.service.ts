import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private baseUrl = 'https://bittersuite-back.onrender.com/api'

  constructor(private http: HttpClient) { }

  getReport(): Observable<any[]> {
    const route = this.baseUrl + '/sales'
    return this.http.get<any[]>(route)
  }

  addSale(sale: any): Observable<any>{
    const route = this.baseUrl + '/sales'
    const body = sale
    return this.http.post<any>(route, body)
  }
}
