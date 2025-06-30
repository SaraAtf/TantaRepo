import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  orgName: string = 'ITI';

  @Output() myEvent = new EventEmitter<string>();

  sendData() {
    this.myEvent.emit(this.orgName);
  }
}
