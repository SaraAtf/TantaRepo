import { Component } from '@angular/core';
import { TestOneWay } from './components/oneWayBinding/test-one-way/test-one-way';
import { TestTwoWay } from './components/twoWayBinding/test-two-way';
import { Login } from './components/login/login';
import { TestStructDir } from './components/directives/test-struct-dir/test-struct-dir';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [TestOneWay, TestTwoWay, Login, TestStructDir, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Day02';
}
