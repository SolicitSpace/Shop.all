import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../@models/products';
import { GlobalService } from '../../@services/global.service';
import { SharedService } from '../../@services/shared.service';

@Component({
  selector: 'app-product-details-panel',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './product-details-panel.component.html',
  styleUrl: './product-details-panel.component.scss',
})
export class ProductDetailsPanelComponent {
  constructor(public global: GlobalService, private shared: SharedService) {}

  @Input({ required: true }) productDetails!: Product;

  onCancel() {
    this.shared.updateProductSelected(null);
  }
}
