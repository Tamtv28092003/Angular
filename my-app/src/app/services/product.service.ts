import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api'; // đặt biến này ở đây

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/products`);
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/products/${id}`);
  }
  getCreat(product: IProduct): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/products`, product);
  }
  getUpdate(product: IProduct): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/products/${product._id}`, product);
  }
  getDelete(_id: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/products/${_id}`);
  }
}
