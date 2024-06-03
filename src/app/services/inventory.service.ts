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

  deleteProduct(sku: string): Observable<any[]> {
    const route = this.baseUrl + '/inventory';
    const options = {
      body: { sku }
    };
    return this.http.request<any[]>('delete', route, options);
  }

  addProduct(product: any): Observable<any> {
    const route = this.baseUrl + '/inventory';
    const body = product
    return this.http.post<any>(route, body)
  }

  updateProduct(product: any): Observable<any> {
    const route = this.baseUrl + '/inventory';
    const body = product
    return this.http.put<any>(route, body)
  }
}
