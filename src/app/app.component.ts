import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean = true;
  buttonClicks: {
    date: Date,
    index: number
   }[] = [];

  onClick() {
    this.display = !this.display;

    this.buttonClicks.push({date: new Date(), index: this.buttonClicks.length});
  }

  getColor(index) {
    return index >= 4 ? 'blue' : '';
  }
}
