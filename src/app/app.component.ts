import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  _value = '';
  val = "";

  // Version 1
  onModelChanged(element: HTMLInputElement) {
    let val = element.value;
    val = val.replace(',', '.');

    this.val = val;
  }

  // version 2
  set value(val: string) {
    this._value = val.replace(',', '.');
  }

  get value() {
    return this._value;
  }
}
