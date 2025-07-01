import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  currentDate: Date = new Date();

  user = { id: 1, name: 'ali', age: 20 };
  orgName: string = 'ITI';
  previousPrice!: number;
  @ViewChild('myH2') element!: ElementRef;

  @Output() myEvent = new EventEmitter<string>();

  @Input({ required: true }) trackName: string = '';
  @Input() product!: { id: number; name: string; price: number };
  constructor() {
    console.log('1-Ctor');
  }
  // Routing
  ngOnDestroy(): void {
    // logic --- project
    console.log('onDestroy');
  }
  ngAfterContentInit(): void {
    console.log('4-after Content Init');
  }

  ngOnInit(): void {
    console.log('3-OnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2-OnChanges');
    // object check prop
    if (changes.hasOwnProperty('product')) {
      if (!changes['product'].firstChange) {
        this.previousPrice = changes['product'].previousValue.price;
      }
    }
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  sendData() {
    // '' == hello
    //this.myEvent.emit('hello');
  }
}
