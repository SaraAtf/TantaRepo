import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  @Input() x: string = '';
  @Input() orgName: string = '';
}
