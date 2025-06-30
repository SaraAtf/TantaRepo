import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  imports: [CommonModule],
  templateUrl: './test-directives.html',
  styleUrl: './test-directives.css',
})
export class TestDirectives {
  flag: boolean = true;
  color: string = 'green';
  toggle() {
    this.flag = !this.flag;
  }
}
