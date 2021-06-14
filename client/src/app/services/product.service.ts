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

  getProduct(id: any): Observable<any> {
    return this.http.get(`${Url}/${id}`);
  }

  addProduct(data: any): Observable<any> {
    /*     const headers = { 'content-type': 'text/plain' };
    return this.http.post(Url, data, { headers: headers }); */
    return this.http.post(Url, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${Url}/${id}`, data);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${Url}/${id}`);
  }

  deleteProducts(): Observable<any> {
    return this.http.delete(Url);
  }

  findProductByName(name: any): Observable<any> {
    return this.http.get(`${Url}?name=${name}`);
  }
}
