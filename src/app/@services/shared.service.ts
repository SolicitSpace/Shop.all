import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Product } from '../@models/products';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSubject = new ReplaySubject<Product | null>();
  selProductDetails$ = this.dataSubject.asObservable();

  constructor() {}

  updateProductSelected(data: Product | null) {
    this.dataSubject.next(data);
  }
}
