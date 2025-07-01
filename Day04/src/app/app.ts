import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Shared } from './shared/shared/shared';
import { User } from './components/user/user';
import { TruncatePipe } from './custom/truncate-pipe';
import { UpperCasePipe } from '@angular/common';
import { ProductForm } from './components/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [Shared, User, TruncatePipe, UpperCasePipe, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  description: string =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eanimi beatae modi, velit voluptate saepe dolorum odio quam! Nobisquisquam molestias voluptate alias quidem, fuga explicabo repellendusaperiam rem';
  protected title = 'Day04';
}
