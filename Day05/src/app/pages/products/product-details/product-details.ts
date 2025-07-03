import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StaticProduct } from '../../../services/static-product';
import { DynamicProductService } from '../../../services/dynamic-product-service';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  productId!: string | null;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: DynamicProductService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
        this.cdr.detectChanges();
      },
    });
  }
}
