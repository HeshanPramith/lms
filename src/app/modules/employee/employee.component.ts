import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeAddModalComponent } from './employee-add-modal/employee-add-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { SidebarService } from 'src/app/core/layout/sidebar/sidebar.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass'],
})
export class EmployeeComponent implements OnInit {

  @Output() employeeData = new EventEmitter<Employee[]>();

  [x: string]: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private employeeService: EmployeeService, public sidebarService: SidebarService) {
    const employees: Employee[] = [
      {
        epfNumber: '001',
        salutation: 'Mr',
        gender: 'Male',
        firstName: 'Heshan',
        middleName: 'Jr',
        lastName: 'Pramith',
        department: 'Development',
        designation: 'Senior UI/UX Engineer',
        employeeCategory: 'Category 1',
        email: 'heshan@genesiis.com',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date('01/02/2020').toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '89552545V',
        mobile: '0714458565',
        telephone: '0118554455',
        utilizedAnnualCount: 14,
        utilizedCasualCount: 7,
        utilizedShortLeaveCount: 2,
        status: 'Active',
        empimage: '../../../assets/img/user.jpg',
      },
      {
        epfNumber: '002',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Prashanthi',
        middleName: 'N/A',
        lastName: 'Gallage',
        department: 'HR /Admin',
        designation: ' Assistant Manager-HR & Administration',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Priyanwada Munasinghe',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Inactive',
        empimage: '../../../assets/img/user2.jpg',
      },
      {
        epfNumber: '003',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Ravindra',
        middleName: 'N/A',
        lastName: 'Kumarasinghe',
        department: 'Development',
        designation: 'QA',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user3.jpg',
      },
      {
        epfNumber: '004',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Chaminda',
        middleName: 'N/A',
        lastName: 'Nanayakkara',
        department: 'Development',
        designation: 'QA',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user4.jpg',
      },
      {
        epfNumber: '005',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Nadeeshani',
        middleName: 'N/A',
        lastName: 'Mendis',
        department: 'HR /Admin',
        designation: 'Administration',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Priyanwada Munasinghe',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user5.jpg',
      },
      {
        epfNumber: '006',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Sandeepa',
        middleName: 'N/A',
        lastName: 'Viduranga',
        department: 'Development',
        designation: 'Front End Engineer',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user.jpg',
      },
      {
        epfNumber: '007',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Sahan',
        middleName: 'N/A',
        lastName: 'Silva',
        department: 'Development',
        designation: 'Software Engineer',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user2.jpg',
      },
      {
        epfNumber: '008',
        salutation: 'N/A',
        gender: 'N/A',
        firstName: 'Rusira',
        middleName: 'N/A',
        lastName: 'Samarasingha',
        department: 'Development',
        designation: 'Associate Software Engineer ',
        employeeCategory: 'N/A',
        email: 'N/A',
        reportingOfficer: 'Tharindu Wijesuriya',
        joinedDate: new Date().toISOString(),
        contractEndDate: new Date().toISOString(),
        nic: '',
        mobile: '',
        telephone: '',
        utilizedAnnualCount: 10,
        utilizedCasualCount: 5,
        utilizedShortLeaveCount: 10,
        status: 'Active',
        empimage: '../../../assets/img/user3.jpg',
      },
    ];

    this.dataSource = new MatTableDataSource(employees);
  }

  openDialog() {
    const lastEmployee = this.dataSource.data[this.dataSource.data.length - 1];
    const nextEpfNumber = (parseInt(lastEmployee.epfNumber) + 1)
      .toString()
      .padStart(3, '0');

    const dialogRef = this.dialog.open(EmployeeAddModalComponent, {
      data: { nextEpfNumber },
      width: '900px',
    });

    dialogRef.afterClosed().subscribe((newEmployeeData) => {
      if (newEmployeeData) {
        this.dataSource.data.push(newEmployeeData);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  openEditDialog(employee: Employee) {
    const dialogRef = this.dialog.open(EmployeeAddModalComponent, {
      data: { mode: 'edit', nextEpfNumber: '', employee },
      width: '900px',
    });

    dialogRef.afterClosed().subscribe((editedEmployeeData) => {
      if (editedEmployeeData) {
        // Update the edited employee's data in the dataSource
        const index = this.dataSource.data.findIndex(
          (e) => e.epfNumber === editedEmployeeData.epfNumber
        );
        if (index !== -1) {
          this.dataSource.data[index] = editedEmployeeData;
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }

  displayedColumns: string[] = [
    'epfNumber',
    'empimage',
    'firstName',
    'designation',
    'department',
    'reportingOfficer',
    'status',
  ];

  dataSource: MatTableDataSource<Employee>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  updateRowClass(employee: Employee, isChecked: boolean) {
    const rowElement = document.getElementById(
      `employee-row-${employee.epfNumber}`
    );

    if (rowElement) {
      if (isChecked) {
        rowElement.classList.remove('inactive');
        rowElement.classList.add('active');
      } else {
        rowElement.classList.remove('active');
        rowElement.classList.add('inactive');
      }
    }
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isSidebarActive: boolean = false;

  ngOnInit() {
    this.employeeData.emit(this.dataSource.data);
    const employees: Employee[] = [/* ... */];
    this.employeeService.updateEmployeeData(employees);
    this.sidebarService.getSidebarState().subscribe(isHidden => {
      this.isSidebarActive = !isHidden;
    });
  }
}
