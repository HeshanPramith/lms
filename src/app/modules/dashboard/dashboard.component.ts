import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SidebarService } from 'src/app/core/layout/sidebar/sidebar.service';

interface User {
  name: string;
  email: string;
  avatar: string;
  mobile: string;
  designation: string;
  availability: string;
}

interface LeaveRecord {
  leavetype: string;
  startDate: string;
  endDate: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements AfterViewInit {

  isSidebarActive: boolean = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.getSidebarState().subscribe(isHidden => {
      this.isSidebarActive = !isHidden;
    });
  }

  userList: User[] = [
    {
      name: 'Heshan Pramith',
      email: 'heshan@genesiis.com',
      mobile: '0715456852',
      designation: 'Senior UI/UX Engineer',
      avatar: '../assets/img/user.jpg',
      availability: 'Leave',
    },
    {
      name: 'Ravindra Kumarasinghe',
      email: 'info@genesiis.com',
      mobile: '0715456852',
      designation: 'Senior QA Engineer',
      avatar: '../assets/img/user2.jpg',
      availability: 'Working',
    },
    {
      name: 'Tharindu Wijesuriya',
      email: 'john@example.com',
      mobile: '0715456852',
      designation: 'Senior Manager',
      avatar: '../assets/img/user3.jpg',
      availability: 'Leave',
    },
    {
      name: 'Chaminda Nanayakkara',
      email: 'info@genesiis.com',
      mobile: '0715456852',
      designation: 'Senior QA Engineer',
      avatar: '../assets/img/user4.jpg',
      availability: 'Leave',
    },
    {
      name: 'Jagath Kumara',
      email: 'john@example.com',
      mobile: '0715456852',
      designation: 'Social Media Executive',
      avatar: '../assets/img/user5.jpg',
      availability: 'Working',
    },
    {
      name: 'Chamendra Perera',
      email: 'john@example.com',
      mobile: '0715456852',
      designation: 'Product Manager',
      avatar: '../assets/img/user.jpg',
      availability: 'Working',
    },
    {
      name: 'Sahan Silva',
      email: 'info@genesiis.com',
      mobile: '0715456852',
      designation: 'Associate Engineer',
      avatar: '../assets/img/user2.jpg',
      availability: 'Working',
    },
    {
      name: 'Rusira Samarasinge',
      email: 'john@example.com',
      mobile: '0715456852',
      designation: 'Senior QA Engineer',
      avatar: '../assets/img/user3.jpg',
      availability: 'Working',
    },
    {
      name: 'Nadeeshani Mendis',
      email: 'info@genesiis.com',
      mobile: '0715456852',
      designation: 'Secretary',
      avatar: '../assets/img/user4.jpg',
      availability: 'Working',
    },
  ];

  leaveRecords: LeaveRecord[] = [
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Rejected',
    },
    {
      leavetype: 'Casual',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'Family function',
      status: 'Pending',
    },
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Approved',
    },
    {
      leavetype: 'Casual',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'Family function',
      status: 'Pending',
    },
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Approved',
    },
    {
      leavetype: 'Casual',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'Family function',
      status: 'Pending',
    },
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Approved',
    },
    {
      leavetype: 'Casual',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'Family function',
      status: 'Pending',
    },
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Approved',
    },
    {
      leavetype: 'Medical',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'fever',
      status: 'Pending',
    },
    {
      leavetype: 'Annual',
      startDate: '2023-08-01',
      endDate: '2023-08-05',
      description: "Baby's Birthday",
      status: 'Approved',
    },
    {
      leavetype: 'Casual',
      startDate: '2023-08-10',
      endDate: '2023-08-12',
      description: 'Family function',
      status: 'Pending',
    },
  ];

  displayedColumns: string[] = ['employeeName', 'startDate', 'endDate', 'description', 'status', 'action'];
  dataSource = new MatTableDataSource(this.leaveRecords);

  displayedColumns2: string[] = ['avatar', 'name', 'designation', 'mobile'];
  dataSource2 = new MatTableDataSource(this.userList);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 900,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      760: { items: 3 },
      1000: { items: 6 },
    },
    nav: false,
  };

  @ViewChild('paginator1') paginator1!: MatPaginator;
  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
    this.dataSource.sort = this.sort;
    this.dataSource2.paginator = this.paginator2;    
  }

  getStatusLabelClass(status: string): string {
    if (status === 'Approved') {
      return 'status-approved';
    } else if (status === 'Pending') {
      return 'status-pending pending-cross';
    } else if (status === 'Rejected') {
      return 'status-rejected';
    }
    return '';
  }

  getAvailableLabelClass(availability: string): string {
    if (availability === 'Working') {
      return 'availability-working';
    } else if (availability === 'Leave') {
      return 'availability-leave';
    }
    return '';
  }
}
