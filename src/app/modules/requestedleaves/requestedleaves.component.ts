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
    eventClick: (info) => {
      if (info.event.start) {
        const startDateString = info.event.start.toLocaleDateString();
        const endDateString = info.event.end ? info.event.end.toLocaleDateString() : '';
    
        this.openModal(
          info.event.title,
          info.event.extendedProps['description'],
          info.event.extendedProps['emp'],
          startDateString,
          endDateString,
          info.event.extendedProps['image']
        );
      }
    },
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    weekends: true,
    selectable: true,
    expandRows: true,
    height: "auto",
    displayEventTime: false,
    events: [
      { emp: 'Heshan', title: 'Heshan on casual leave', description: "Baby's Birthday", date: '2023-08-14', image: '../../../../assets/img/user.jpg' },
      { emp: 'Sandeepa', title: 'Sandeepa on casual leave', description: "Family function", date: '2023-08-14', image: '../../../../assets/img/user2.jpg' },
      { emp: 'Shehan', title: 'Shehan on Halfday (First)', description: "Need to go bank", date: '2023-08-14', image: '../../../../assets/img/user3.jpg' },
      { emp: 'Dasun', title: 'Dasun on sick leave', description: "Not feeling well", start: new Date('2023-08-15'), end: new Date('2023-08-16'), image: '../../../../assets/img/user4.jpg' },
      { emp: 'Ravindra', title: 'Ravindra on annual leave', description: "Family trip", start: new Date('2023-08-21'), end: new Date('2023-08-25'), image: '../../../../assets/img/user5.jpg' },
      { emp: 'Tharindu', title: 'Tharindu on casual leave', description: "Baby's Birthday", date: '2023-10-17', image: '../../../../assets/img/user.jpg' },
      { emp: 'Dhanushka', title: 'Dhanushka on casual leave', description: "Family function", date: '2023-09-14', image: '../../../../assets/img/user2.jpg' },
      { emp: 'Rasika', title: 'Rasika on Halfday (First)', description: "Need to go bank", date: '2023-09-14', image: '../../../../assets/img/user3.jpg' },
      { emp: 'Shamal', title: 'Shamal on annual leave', description: "Not feeling well", start: new Date('2023-09-18'), end: new Date('2023-09-22'), image: '../../../../assets/img/user4.jpg' },
      { emp: 'Indika', title: 'Indika on annual leave', description: "Family trip", start: new Date('2023-09-04'), end: new Date('2023-06-06'), image: '../../../../assets/img/user5.jpg' },
    ],
    eventContent: (info) => {
      const eventImage = info.event.extendedProps['image'];
      const eventTitle = info.event.title;
      return {
        html: `
          <div class="event-container extended-cal">
              <img class="event-image" src="${eventImage}" alt="Event Image">
              <div class="event-title">${eventTitle}</div>
          </div>
        `,
      };
    },
    dateClick: (info) => {
      if (info.date.getDay() !== 0 && info.date.getDay() !== 6) {
        this.openModal2('Annual Leave', '', info.dateStr);
      }
    },
    selectAllow: (selectInfo) => {
      return selectInfo.start.getDay() !== 0 && selectInfo.start.getDay() !== 6;
    }
  };

  constructor(public dialog: MatDialog) {}

  openModal(eventTitle: string, eventDescription: string, eventEmp: string, eventStart: string, eventEnd: string, eventImage: string) {
    const startDate = new Date(eventStart);
    const endDate = eventEnd ? new Date(eventEnd) : null;
  
    const dateRange = endDate && startDate.toDateString() !== endDate.toDateString()
      ? `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
      : startDate.toLocaleDateString();
  
    const dialogRef = this.dialog.open(RequestedLeaveModalComponent, {
      width: '400px',
      data: {
        eventTitle,
        eventDescription,
        eventEmp,
        eventDateRange: dateRange,
        eventImage
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  }
  

  openModal2(eventTitle: string, eventDescription: string, selectedDate: string) {
    const dialogRef = this.dialog.open(ApplyLeaveModalComponent, {
      width: '400px',
      data: { eventTitle, eventDescription, selectedDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The modal was closed');
    });
  };
}
