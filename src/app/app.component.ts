import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle: string = 'NG Firebase Feb 2021 ABC';
  appNo: number = 1234;

  getSomeData(val1: string, val2: number): string {
    return `sample Data ${val1} ${val2}`;
  }
}
