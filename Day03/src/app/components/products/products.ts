import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-products',
  imports: [ProductDetails],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  count: number = 0;
  @Output() onAddProductToCart = new EventEmitter();
  products: any[] = [
    {
      id: 1,
      name: 'Book',
      price: 400,
    },
    {
      id: 2,
      name: 'Pen',
      price: 300,
    },
    {
      id: 3,
      name: 'Watch',
      price: 300,
    },
  ];
  getProductNumber(data: number) {
    this.count = data;
    this.onAddProductToCart.emit(this.count);
  }
}
