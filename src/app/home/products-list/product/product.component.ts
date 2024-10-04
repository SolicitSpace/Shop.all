import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../../@models/products';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../../@services/global.service';
import { SharedService } from '../../../@services/shared.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input() productDetails!: Product;

  constructor(public global: GlobalService, private shared: SharedService) {}

  ngOnInit(): void {}

  showProductDetails(productDetails: Product) {
    console.log('Displaying product details...', productDetails);
    this.shared.updateProductSelected(productDetails);
  }
}
