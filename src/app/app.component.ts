import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';

  DeliveryStatus: any;
  setDate: any = '13.08.2021';

  constructor() {
    this.DeliveryStatus = [
      { name: 'Instruction', date: '13.08.2021', dayDiff: '0 d.' },
      { name: 'Alert', date: '27.08.2021', dayDiff: '14 d.' },
      { name: 'Reminder', date: '03.09.2021', dayDiff: '7 d.' },
      { name: 'warning', date: '17.09.2021', dayDiff: '14 d.' },
      { name: 'Alert', date: '24.09.2021', dayDiff: '7 d.' },
      { name: 'warning', date: '01.10.2021', dayDiff: '7 d.' },
      { name: 'Hardblock note', date: '12.10.2021', dayDiff: '11 d.' },
    ]
  }

}
