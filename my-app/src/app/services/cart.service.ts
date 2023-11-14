import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiBaseURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem('accessToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return headers;
  }

  getCartUser(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiBaseURL}/cart/user`, { headers });
  }
  addToCart(cart: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/cart/add`, cart);
  }
  addCart(userId: string, productId: string, quantity: number, price: number): Observable<any> {
    const cartdata = {
      userId: userId,
      productId: productId,
      quantity: quantity,
      price: price,
    };
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiBaseURL}/cart/add`, cartdata, { headers });
  }
  // signup(userId: string, productId: string, quantity: number, price: number) {
  //   const cartdata = {
  //     userId: userId,
  //     productId: productId,
  //     quantity: quantity,
  //     price: price,
  //   };

  //   return this.http.post('http://localhost:8080/api/cart/add', cartdata);
  // }
}
