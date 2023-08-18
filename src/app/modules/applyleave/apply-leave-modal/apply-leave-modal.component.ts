import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-leave-modal',
  templateUrl: './apply-leave-modal.component.html',
  styleUrls: ['./apply-leave-modal.component.sass']
})
export class ApplyLeaveModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
