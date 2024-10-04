import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../@models/products';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getAllProductsDataS() {
    return new Promise((resolve) => {
      this.http
        .get('https://fakestoreapi.com/products')
        .subscribe((response) => resolve(response));
    });
  }
  getProductsDataS(numOfProd: number):Promise<Product[]> {
     return new Promise((resolve) => {
      this.http
        .get<Product[]>(`https://fakestoreapi.com/products?limit=${numOfProd}`)
        .subscribe((response) => resolve(response));
    });
  }
  getSingleProductDataS(prodId: number) {
     return new Promise((resolve) => {
      this.http
        .get(`https://fakestoreapi.com/products/${prodId}`)
        .subscribe((response) => resolve(response));
    });
  }
}
