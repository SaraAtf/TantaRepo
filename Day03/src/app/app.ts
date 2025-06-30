import { Component } from '@angular/core';
import { TestDirectives } from './components/test-directives/test-directives';
import { SharedCard } from './shared/shared-card';
import { User } from './components/user/user';
import { Content } from './components/content/content';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products/products';

@Component({
  selector: 'app-root',
  imports: [TestDirectives, SharedCard, User, Content, Login, Navbar, Products],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  trackName: string = 'Dotnet tanta';
  ourOrgName: string = '';
  count: number = 0;
  protected title = 'Day03';
  getData(data: string) {
    this.ourOrgName = data;
  }
  getCount(count: number) {
    this.count = count;
  }
}
