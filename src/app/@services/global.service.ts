import { Injectable } from '@angular/core';
import { Product } from '../@models/products';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  handleRatingState(starNum: number, productDetails: Product) {
    return starNum <= Math.round(productDetails.rating.rate)
      ? 'pi-star-fill'
      : 'pi-star';
  }
}
