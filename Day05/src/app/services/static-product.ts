import { Injectable } from '@angular/core';
import { IProduct } from '../model/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProduct {
  products: IProduct[] = [
    {
      id: '1',
      name: 'Book',
      price: 200,
      quantity: 10,
    },
    {
      id: '2',
      name: 'Pen',
      quantity: 10,
      price: 300,
    },
    {
      id: '3',
      name: 'Watch',
      quantity: 90,
      price: 30,
    },
  ];
  constructor() {}

  getAllProducts() {
    return this.products;
  }

  getProductById(productId: string | null): IProduct | undefined {
    return this.products.find((product) => product.id == productId);
  }
  addProduct(product: any) {
    this.products.push(product);
    return this.products;
  }
  editProduct(id: string, product: any) {}
  deletePRoduct(id: string) {}
}
