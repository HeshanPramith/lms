import { Component, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialog } from '@angular/material/dialog';
import { ApplyLeaveModalComponent } from './apply-leave-modal/apply-leave-modal.component';
import interactionPlugin from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/core';
import { SidebarService } from 'src/app/core/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.sass']
})
export class ApplyleaveComponent {

  highlightedDateRanges: { start: string, end: string }[] = [
    { start: '2023-08-21', end: '2023-08-25' }
  ];

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
    events: (_info, successCallback, _failureCallback) => {
      const events: EventInput[] = [];
  
      for (const range of this.highlightedDateRanges) {
        let currentDate = new Date(range.start);
  
        while (currentDate <= new Date(range.end)) {
          events.push({
            title: 'Annual Leave',
            start: currentDate.toISOString().substr(0, 10),
            display: 'background',
            color: 'rgba(23, 173, 55, 0.65)'
          });
  
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
  
      successCallback(events);
    },
    dateClick: (info) => {
      if (info.date.getDay() !== 0 && info.date.getDay() !== 6) {
        this.openModal('Annual Leave', '', info.dateStr);
      }
    },
    selectAllow: (selectInfo) => {
      return selectInfo.start.getDay() !== 0 && selectInfo.start.getDay() !== 6;
    }
  };

  constructor(public dialog: MatDialog, public sidebarService: SidebarService) {}

  isSidebarActive: boolean = false;

  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe(isHidden => {
      this.isSidebarActive = !isHidden;
    });
  }

  openModal(eventTitle: string, eventDescription: string, selectedDate: string) {
    const dialogRef = this.dialog.open(ApplyLeaveModalComponent, {
      width: '400px',
      data: { eventTitle, eventDescription, selectedDate }
    });

    dialogRef.afterClosed().subscribe(_result => {
      console.log('The modal was closed');
    });
  };
}