import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveModalComponent } from './apply-leave-modal/apply-leave-modal.component';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.sass']
})
export class ApplyleaveComponent {

  @ViewChild('calendar') calendar: any;
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    expandRows: true,
    selectable: true,
    dateClick: (info) => {
      if (info.date.getDay() !== 0 && info.date.getDay() !== 6) {
        this.openModal(info.dateStr, '');
      }
    }
  };

  constructor(public dialog: MatDialog) {}

  openModal(eventTitle: string, eventDescription: string) {
    const dialogRef = this.dialog.open(ApplyLeaveModalComponent, {
      width: '500px',
      data: { eventTitle, eventDescription }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  };
}