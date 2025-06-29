import { Component } from '@angular/core';
import { Login } from '../../login/login';
import { TestTwoWay } from '../../twoWayBinding/test-two-way';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-struct-dir',
  imports: [Login, TestTwoWay, CommonModule],
  templateUrl: './test-struct-dir.html',
  styleUrl: './test-struct-dir.css',
})
export class TestStructDir {
  flag: boolean = true;
  color: string = 'green';

  toggle() {
    this.flag = !this.flag;
  }
  products: { id: number; name: string; price: number }[] = [
    {
      id: 1,
      name: 'Book',
      price: 300,
    },
    {
      id: 2,
      name: 'Pen',
      price: 100,
    },
    {
      id: 3,
      name: 'Watch',
      price: 500,
    },
  ];
}
