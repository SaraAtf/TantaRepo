import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StaticProduct } from '../../services/static-product';
import { IProduct } from '../../model/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DynamicProductService } from '../../services/dynamic-product-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: IProduct[] = [];
  constructor(
    private productService: DynamicProductService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteHandler(productId: string) {
    this.productService.deleteProduct(productId).subscribe({
      next: (response) => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
