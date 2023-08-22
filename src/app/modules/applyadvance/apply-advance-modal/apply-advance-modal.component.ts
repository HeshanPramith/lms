import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AdvanceData } from '../applyadvance.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-apply-advance-modal',
  templateUrl: './apply-advance-modal.component.html',
  styleUrls: ['./apply-advance-modal.component.sass']
})
export class ApplyAdvanceModalComponent implements OnInit {
  months: Month[] = [
    { value: 'january', viewValue: 'January' },
    { value: 'february', viewValue: 'February' },
    { value: 'march', viewValue: 'March' },
    { value: 'april', viewValue: 'April' },
    { value: 'may', viewValue: 'May' },
    { value: 'june', viewValue: 'June' },
    { value: 'july', viewValue: 'July' },
    { value: 'august', viewValue: 'August' },
    { value: 'september', viewValue: 'September' },
    { value: 'october', viewValue: 'October' },
    { value: 'november', viewValue: 'November' },
    { value: 'december', viewValue: 'December' },
  ];

  constructor(private datePipe: DatePipe, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    const currentDate = new Date();
    const currentMonth = this.datePipe.transform(currentDate, 'MMMM');
    const selectedMonth = this.months.find(month => month.viewValue === currentMonth);
    this.currentYear = currentDate.getFullYear();

    if (selectedMonth) {
      this.selectedMonthValue = selectedMonth.value;
    }
  }

  selectedMonthValue: string = '';

  inputValue1: number = 0;
  inputValue2: number = 0;
  totalValue: number = 0;
  currentYear!: number;

  calculateTotal(): void {
    this.totalValue = this.inputValue1 + this.inputValue2;
  }

  @Output() addAdvance: EventEmitter<AdvanceData> = new EventEmitter<AdvanceData>();

  applyDate: string = new Date().toISOString().split('T')[0];
  month: string = '';
  firstAmount: number = 0;
  secondAmount: number = 0;

  onSubmit() {
    const newAdvance: AdvanceData = {
      applyDate: this.applyDate,
      month: this.selectedMonthValue,
      firstAmount: this.firstAmount,
      secondAmount: this.secondAmount,
      total: this.firstAmount + this.secondAmount
    };

    this.addAdvance.emit(newAdvance);
  }
}
