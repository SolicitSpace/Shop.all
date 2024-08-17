import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    BrowseByCategoryComponent,
    ProductsListComponent,
    NewArrivalsComponent,
    DiscountComponent,
    SiteFeaturesComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private navCtrl: Router, private homeService: HomeService) {}

  async getProductsData() {
    console.log(await this.homeService.getProductsDataS());
  }
}
