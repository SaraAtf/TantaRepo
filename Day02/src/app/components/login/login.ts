import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // @ViewChild --
  username: string = '';
  password: string = '';

  login() {
    console.log('username : ', this.username);
    console.log('password : ', this.password);
  }
  execute(element: any) {
    console.log(element.textContent);
  }
  getInputData(input: any) {
    console.log(input.value);
  }
}
