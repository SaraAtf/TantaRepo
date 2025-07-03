import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StaticProduct } from '../../../services/static-product';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicProductService } from '../../../services/dynamic-product-service';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  productId: any;
  //

  constructor(
    private productService: DynamicProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    //id == observable pattern == subscribe(logic)
    // this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.productId = params.get('id');
        this.getName.setValue('');
        this.getPrice.setValue('');
        this.getQuantity.setValue('');
      },
      error: () => {},
    });

    if (this.productId != 0) {
      this.productService.getProductById(this.productId).subscribe({
        next: (response) => {
          this.getName.setValue(response.name);
          this.getPrice.setValue(response.price.toString());
          this.getQuantity.setValue(response.quantity.toString());
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required]),
  });

  get getName() {
    return this.productForm.controls['name'];
  }
  get getPrice() {
    return this.productForm.controls['price'];
  }
  get getQuantity() {
    return this.productForm.controls['quantity'];
  }

  productHandler() {
    if (this.productForm.status == 'VALID') {
      if (this.productId == 0) {
        //add
        this.productService.addNewProduct(this.productForm.value).subscribe({
          next: () => {
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.log(error);
          },
        });
      } else {
        this.productService
          .editProduct(this.productId, this.productForm.value)
          .subscribe({
            next: () => {
              this.router.navigate(['/products']);
            },
            error: (error) => {
              console.log(error);
            },
          });
      }
    } else {
      console.log('Fix Errors');
    }
    // ts --
  }
}
