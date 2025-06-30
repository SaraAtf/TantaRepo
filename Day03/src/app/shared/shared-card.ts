import { Component } from '@angular/core';
import { ScaleAnimation } from '../custom/scale-animation';

@Component({
  selector: 'app-shared-card',
  imports: [ScaleAnimation],
  templateUrl: './shared-card.html',
  styleUrl: './shared-card.css',
})
export class SharedCard {}
