import { Component, OnInit } from '@angular/core';
import { StaticProduct } from '../../services/static-product';
import { IProduct } from '../../model/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: StaticProduct) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
