import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-two-way',
  imports: [FormsModule],
  templateUrl: './test-two-way.html',
  styleUrl: './test-two-way.css',
})
// export class TestTwoWay {
//   data: string = '';
//   getInputData(e: Event) {
//     const target = e.target as HTMLInputElement;
//     this.data = target.value;
//   }
// }
export class TestTwoWay {
  data: string = '';
}
