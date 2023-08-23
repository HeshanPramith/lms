import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';

interface Leave {
  name: string;
  balance: number;
}

interface actingperson {
  person: string;
}

interface notifyperson {
  person: string;
}

@Component({
  selector: 'app-apply-leave-modal',
  templateUrl: './apply-leave-modal.component.html',
  styleUrls: ['./apply-leave-modal.component.sass'],
})

export class ApplyLeaveModalComponent {
  selectedDate: string;
  numberOfDays: number = 0;
  isHalfDayFrom: boolean = false;
  isHalfDayTo: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.selectedDate = data.selectedDate;
  }

  leaveControl = new FormControl<Leave | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  leaves: Leave[] = [
    { name: 'Annual Leave', balance: 14 },
    { name: 'Casual Leave', balance: 7 },
    { name: 'Short Leave', balance: 2 },
    { name: 'Medical Leave', balance: 10 },
    { name: 'Half Day Leave', balance: 0 }
  ];

  actingpersons: actingperson[] = [
    {person: 'Heshan P'},
    {person: 'Ravindra K'},
    {person: 'Dasun H'},
  ];

  notifypersons: notifyperson[] = [
    {person: 'Senaka W'},
    {person: 'Nilkamal W'},
  ];

  calculateNumberOfDays(fromDate: string, toDate: string): void {
    const from = moment(fromDate);
    const to = moment(toDate);
    let weekdays = this.calculateWeekdays(from, to);
  
    console.log('Before half-day adjustment:', weekdays);
  
    if (
      this.leaveControl.value &&
      (this.leaveControl.value.name === 'Annual Leave' ||
        this.leaveControl.value.name === 'Casual Leave' ||
        this.leaveControl.value.name === 'Medical Leave')
    ) {
      if (this.isHalfDayFrom) {
        weekdays -= 0.5;
      }
  
      if (this.isHalfDayTo) {
        weekdays -= 0.5;
      }
    }
  
    console.log('After half-day adjustment:', weekdays);
  
    this.numberOfDays = weekdays;
  }

  calculateWeekdays(startDate: moment.Moment, endDate: moment.Moment): number {
    let currentDate = startDate.clone();
    let weekdays = 0;

    while (currentDate <= endDate) {
      if (currentDate.day() !== 0 && currentDate.day() !== 6) {
        weekdays++;
      }
      currentDate = currentDate.clone().add(1, 'days');
    }

    return weekdays;
  }

  handleHalfDayFromChange(): void {
    if (this.isHalfDayFrom) {
      this.numberOfDays -= 0.5;
    } else {
      this.numberOfDays += 0.5;
    }
  }
  
  handleHalfDayToChange(): void {
    if (this.isHalfDayTo) {
      this.numberOfDays -= 0.5;
    } else {
      this.numberOfDays += 0.5;
    }
  }

  fromDateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      this.selectFormControl.setValue(null);
      this.numberOfDays = 0;
      this.calculateNumberOfDays(
        event.value.toISOString(),
        this.selectedToDate
      );
    }
  }

  toDateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value && this.selectedDate) {
      this.selectFormControl.setValue(null);
      this.numberOfDays = 0;
      this.calculateNumberOfDays(this.selectedDate, event.value.toISOString());
    }
  }

  get selectedFromDate(): string {
    return this.selectedDate;
  }

  get selectedToDate(): string {
    return this.selectFormControl.value || '';
  }
}
