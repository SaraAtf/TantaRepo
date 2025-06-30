import { Component } from '@angular/core';
import { ScaleAnimation } from '../../custom/scale-animation';

@Component({
  selector: 'app-user',
  imports: [ScaleAnimation],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {}
