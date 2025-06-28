import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { Slider } from './components/slider/slider';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [Header, Content, Slider, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'first';
}
