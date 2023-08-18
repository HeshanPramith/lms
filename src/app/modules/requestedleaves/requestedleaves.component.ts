import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { RequestedLeaveModalComponent } from './requested-leave-modal/requested-leave-modal.component';
import { ApplyLeaveModalComponent } from '../applyleave/apply-leave-modal/apply-leave-modal.component';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-requestedleaves',
  templateUrl: './requestedleaves.component.html',
  styleUrls: ['./requestedleaves.component.sass']
})
export class RequestedleavesComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClassNames: ({ event }) => {
      if (event.start && (event.start.getDay() === 6 || event.start.getDay() === 0)) {
        return ['weekend-event'];
      }
      return [];
    },  
    eventClick: (info) => this.openModal(info.event.title, info.event.extendedProps['description']),
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    weekends: true,
    selectable: true,
    events: [
      { title: 'Heshan on casual leave', description: "Baby's Birthday", date: '2023-08-14' },
      { title: 'Sandeepa on casual leave', description: "Family function", date: '2023-08-14' },
      { title: 'Shehan on Halfday (M)', description: "Need to go bank", date: '2023-08-14' },
      { title: 'Dasun on sick leave', description: "Not feeling well", start: '2023-08-15', end: '2023-08-16' },
      { title: 'Ravindra on annual leave', description: "Family trip", start: '2023-08-21', end: '2023-08-25' },
    ],
    dateClick: (info) => {
      if (info.date.getDay() !== 0 && info.date.getDay() !== 6) {
        this.openModal2(info.dateStr, '');
      }
    }
  };

  constructor(public dialog: MatDialog) {}

  openModal(eventTitle: string, eventDescription: string) {
    const dialogRef = this.dialog.open(RequestedLeaveModalComponent, {
      width: '400px',
      data: { eventTitle, eventDescription }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  };

  openModal2(eventTitle: string, eventDescription: string) {
    const dialogRef = this.dialog.open(ApplyLeaveModalComponent, {
      width: '500px',
      data: { eventTitle, eventDescription }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  };
}
