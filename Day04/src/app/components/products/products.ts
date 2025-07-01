import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-products',
  imports: [ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(private cdr: ChangeDetectorRef) {}
  // Error
  test!: string;
  trackName: string = 'Dotnet';
  // primitive VS Reference
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 400,
  };

  getData(data: string) {
    this.test = data;

    // zone.js -- --19 0-- 20
     this.cdr.detectChanges();
    // change test -- render -- Error 20
  }
  getOffer() {
    // change product -- resent product-details
    this.product = { ...this.product, price: 200 }; // change
    // this.product.price = 200; // valid --
  }
  changeTrackName() {
    this.trackName = 'MEarn';
  }
}
