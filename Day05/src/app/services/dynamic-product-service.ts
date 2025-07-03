import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DynamicProductService {
  baseUrl: string = 'http://localhost:3005/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl); // backEnd -- send request to your server -- get -- open
  }

  getProductById(productId: any): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${productId}`);
  }

  addNewProduct(product: any): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product);
  }

  editProduct(productId: any, product: any): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${productId}`, product);
  }

  deleteProduct(productId: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.baseUrl}/${productId}`);
  }
}
