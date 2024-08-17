import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getProductsDataS() {
    return new Promise((resolve) => {
      this.http
        .get('https://fakestoreapi.com/products')
        .subscribe((response) => resolve(response));
    });
  }
}
