import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-requested-leave-modal',
  templateUrl: './requested-leave-modal.component.html',
  styleUrls: ['./requested-leave-modal.component.sass']
})
export class RequestedLeaveModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { eventTitle: string, eventDescription: string, eventEmp: string, eventDateRange: string, eventImage: string }) {}
}
