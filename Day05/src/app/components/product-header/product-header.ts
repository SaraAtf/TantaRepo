import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './product-header.html',
  styleUrl: './product-header.css',
})
export class ProductHeader {
  constructor(private router: Router) {}
  size!: string;
  category!: string;

  filterBy() {
    this.router.navigate(['/products'], {
      queryParams: { size: this.size, category: this.category },
    });
  }
}
