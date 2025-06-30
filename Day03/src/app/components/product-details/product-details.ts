import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  numberOfProduct: number = 0; // orginal Data
  @Output() onAddProduct = new EventEmitter<number>();

  addNewProduct() {
    this.numberOfProduct += 1; // increment
    this.onAddProduct.emit(this.numberOfProduct);
  }
}
