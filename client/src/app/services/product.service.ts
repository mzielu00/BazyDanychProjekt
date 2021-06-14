import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const Url = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${Url}`);
  }

  getProduct(name: any): Observable<any> {
    return this.http.get(`${Url}/${name}`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(Url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${Url}/${id}`, data);
  }

  deleteProduct(name: any): Observable<any> {
    return this.http.delete(`${Url}/${name.name}`);
  }

  deleteProducts(): Observable<any> {
    return this.http.delete(Url);
  }

  findProductByName(name: any): Observable<any> {
    return this.http.get(`${Url}/?name=${name}`);
  }
}
