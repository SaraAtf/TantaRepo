import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way',
  imports: [],
  templateUrl: './test-one-way.html',
  styleUrl: './test-one-way.css',
})
export class TestOneWay {
  imgSrc1: string = '1.jpg';
  imgSrc2: string = 'images/3.jpg';
  altText: string = 'hello ya dotnet';
  trackName: string = 'Front';
  flag: boolean = true;
  user!: { id: number; name: string };

  student: { id: number; name: string; age: number } | undefined = {
    id: 1,
    name: 'Ali',
    age: 20,
  };
  student2?: { id: number; name: string; age: number } = {
    id: 1,
    name: 'Ali',
    age: 20,
  };
}
