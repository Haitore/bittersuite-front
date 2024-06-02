import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getStores(): Observable<any[]> {
    const route = this.baseUrl + '/hosts'
    return this.http.get<any[]>(route)
  }
}
