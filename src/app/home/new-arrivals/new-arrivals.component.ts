import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { HomeService } from '../../@services/home.service';
import { Product } from '../../@models/products';
import { GlobalService } from '../../@services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
})
export class NewArrivalsComponent implements OnInit {
  productsList: Product[] = [];
  constructor(public global: GlobalService, private homeService: HomeService) {}
  async ngOnInit() {
    this.productsList = await this.homeService.getProductsDataS(3);
  }
}
