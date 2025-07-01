import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-products',
  imports: [ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // Error
  // test: string = 'ITI';
  trackName: string = 'Dotnet';
  // primitive VS Reference
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 400,
  };

  getData(data: string) {}
  getOffer() {
    // change product -- resent product-details
    this.product = { ...this.product, price: 200 }; // change
    // this.product.price = 200; // valid --
  }
  changeTrackName() {
    this.trackName = 'MEarn';
  }
}
