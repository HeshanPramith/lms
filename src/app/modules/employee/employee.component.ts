import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Employee {
  epfNumber: string;
  salutation: string;
  gender: string;
  firstName: string;
  middleName: string;
  lastName: string;
  department: string;
  designation: string;
  employeeCategory: string;
  email: string;
  reportingOfficer: string;
  joinedDate: string;
  contractEndDate: string;
  nic: string;
  mobile: string;
  telephone: string;
  utilizedAnnualCount: number;
  utilizedCasualCount: number;
  utilizedShortLeaveCount: number;
  status: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})

export class EmployeeComponent {
[x: string]: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const employees: Employee[] = [
      { epfNumber: '001', salutation: 'N/A', gender: 'N/A', firstName: 'Heshan', middleName: 'N/A', lastName: 'Pramith', department: 'Development', designation: 'Senior UI/UX Engineer', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '002', salutation: 'N/A', gender: 'N/A', firstName: 'Prashanthi', middleName: 'N/A', lastName: 'Gallage', department: 'Administration', designation: ' Assistant Manager-HR & Administration', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Priyanwada Munasinghe', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Inactive' },
      { epfNumber: '003', salutation: 'N/A', gender: 'N/A', firstName: 'Ravindra', middleName: 'N/A', lastName: 'Kumarasinghe', department: 'Development', designation: 'QA', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '004', salutation: 'N/A', gender: 'N/A', firstName: 'Chaminda', middleName: 'N/A', lastName: 'Nanayakkara', department: 'Development', designation: 'QA', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '005', salutation: 'N/A', gender: 'N/A', firstName: 'Nadeeshani', middleName: 'N/A', lastName: 'Mendis', department: 'Administration', designation: 'Administration', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Priyanwada Munasinghe', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '006', salutation: 'N/A', gender: 'N/A', firstName: 'Sandeepa', middleName: 'N/A', lastName: 'Viduranga', department: 'Development', designation: 'Front End Engineer', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '007', salutation: 'N/A', gender: 'N/A', firstName: 'Sahan', middleName: 'N/A', lastName: 'Silva', department: 'Development', designation: 'Software Engineer', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
      { epfNumber: '008', salutation: 'N/A', gender: 'N/A', firstName: 'Rusira', middleName: 'N/A', lastName: 'Samarasingha', department: 'Development', designation: 'Associate Software Engineer ', employeeCategory: 'N/A', email: 'N/A', reportingOfficer: 'Tharindu Wijesuriya', joinedDate: new Date().toLocaleDateString(), contractEndDate: new Date().toLocaleDateString(), nic: '', mobile: '', telephone: '', utilizedAnnualCount: 10, utilizedCasualCount: 5, utilizedShortLeaveCount: 10, status: 'Active' },
    ];

    this.dataSource = new MatTableDataSource(employees);
  }

  displayedColumns: string[] = [
    'epfNumber', 'firstName', 'department', 'designation', 'reportingOfficer', 'status'
  ];
  dataSource: MatTableDataSource<Employee>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
