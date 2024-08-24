import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string; // Assuming the image can be a URL or a relative path
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: 'INSTOCK' | 'OUTOFSTOCK' | 'DISCONTINUED'; // Use string literals for predefined statuses
  rating: number;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ButtonModule, CarouselModule, TagModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  products: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      // image: 'https://m.media-amazon.com/images/I/71laS8MD9cL._AC_UY350_.jpg',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 0,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      // image: 'https://m.media-amazon.com/images/I/71laS8MD9cL._AC_UY350_.jpg',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      // image: 'https://m.media-amazon.com/images/I/71laS8MD9cL._AC_UY350_.jpg',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      // image: 'https://m.media-amazon.com/images/I/71laS8MD9cL._AC_UY350_.jpg',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];

  responsiveOptions: any[] | undefined;

  constructor() {} // private productService: ProductService

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '2600px',   // max-width
        numVisible: 1,    // the number of items items per page
        numScroll: 1,   // the number of items items per page
      },
      // {
      //   breakpoint: '1220px',
      //   numVisible: 2,
      //   numScroll: 2,
      // },
      // {
      //   breakpoint: '1100px',
      //   numVisible: 1,
      //   numScroll: 1,
      // },
    ];
  }

  getSeverity(
    status: string
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }
}
