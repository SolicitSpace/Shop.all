import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../@services/home.service';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BrowseByCategoryComponent } from './browse-by-category/browse-by-category.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { DiscountComponent } from './discount/discount.component';
import { SiteFeaturesComponent } from './site-features/site-features.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductDetailsPanelComponent } from './product-details-panel/product-details-panel.component';
import { Product } from '../@models/products';
import { SharedService } from '../@services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    BrowseByCategoryComponent,
    ProductsListComponent,
    NewArrivalsComponent,
    DiscountComponent,
    SiteFeaturesComponent,
    FooterComponent,
    ProductDetailsPanelComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  productDetails!: Product | null;

  constructor(private navCtrl: Router, private shared: SharedService) {}

  ngOnInit() {
    this.shared.selProductDetails$.subscribe((data) => {
      this.productDetails = data;
    });
  }
}
