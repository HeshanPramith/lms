import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidebarService } from 'src/app/core/layout/sidebar/sidebar.service';
import { ApplyAdvanceModalComponent } from './apply-advance-modal/apply-advance-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface AdvanceData {
  applyDate: string;
  month: string;
  firstAmount: number;
  secondAmount: number;
  total: number;
}

const SalAdvance: AdvanceData[] = [
  
];

const monthNames: string[] = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentYear = new Date().getFullYear();
const minAmount = 5000;

for (let i = 1; i <= 12; i++) {
  const randomFirstAmount = Math.floor(Math.random() * (1000 - minAmount + 1)) + minAmount;
  const randomSecondAmount = Math.floor(Math.random() * (1000 - minAmount + 1)) + minAmount;
  
  const monthData = {
    applyDate: `${currentYear}-${String(i).padStart(2, '0')}-01`,
    month: monthNames[i - 1],
    firstAmount: randomFirstAmount,
    secondAmount: randomSecondAmount,
    total: randomFirstAmount + randomSecondAmount
  };
  
  SalAdvance.push(monthData);
}

@Component({
  selector: 'app-applyadvance',
  templateUrl: './applyadvance.component.html',
  styleUrls: ['./applyadvance.component.sass']
})
export class ApplyadvanceComponent {
  constructor(private dialog: MatDialog, public sidebarService: SidebarService) {}

  isSidebarActive: boolean = false;

  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe(isHidden => {
      this.isSidebarActive = !isHidden;
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<AdvanceData>(SalAdvance);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openApplyAdvanceModal() {
    const dialogRef = this.dialog.open(ApplyAdvanceModalComponent, {
      width: '400px',
    });

    dialogRef.componentInstance.addAdvance.subscribe((newAdvance: AdvanceData) => {
      // Update your data source here
      SalAdvance.unshift(newAdvance);
      this.dataSource.data = SalAdvance;
      this.newlyAddedRowIndex = 0;
      dialogRef.close();
    });
  }

  newlyAddedRowIndex: number | null = null;

  displayedColumns: string[] = ['applyDate', 'month', 'firstAmount', 'secondAmount', 'total'];
}
