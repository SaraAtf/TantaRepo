import { Component } from '@angular/core';
import { ProductHeader } from '../../components/product-header/product-header';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-products',
  imports: [ProductHeader, ProductList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {}
