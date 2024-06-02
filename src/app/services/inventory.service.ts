import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getInventory(): Observable<any[]> {
    const route = this.baseUrl + '/inventory'
    return this.http.get<any[]>(route)
  }
}
