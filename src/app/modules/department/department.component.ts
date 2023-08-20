import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Department {
  department: string;
  status: string;
  description: string;
  editing?: boolean;
  departmentBackup?: string;
  statusBackup?: string;
  statusBoolean?: boolean;
  isNew?: boolean;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass'],
})
export class DepartmentComponent implements AfterViewInit {
  displayedColumns: string[] = ['department', 'description', 'status',  'actions'];
  dataSource: MatTableDataSource<Department>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const departments: Department[] = [
      { department: 'HR /Admin', description: 'HR /Admin description', status: 'Active' },
      { department: 'Development', description: 'Development description', status: 'Active' },
      { department: 'Sales', description: 'Sales description', status: 'Inactive' },
      { department: 'Help Desk', description: 'Help Desk description', status: 'Active' },
      { department: 'Marketing', description: 'Marketing description.', status: 'Active' },
      { department: 'Finance', description: 'N/A', status: 'Inactive' },
      { department: 'GIS', description: 'GIS description', status: 'Active' },
    ];

    for (const department of departments) {
      department.statusBoolean = department.status === 'Active';
    }

    this.dataSource = new MatTableDataSource(departments);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  startEditing(row: Department): void {
    row.editing = true;
    row.departmentBackup = row.department;
    row.statusBackup = row.status;
  }

  saveEditing(row: Department): void {
    row.editing = false;
    delete row.departmentBackup;
    delete row.statusBackup;
    row.status = row.statusBoolean ? 'Active' : 'Inactive';
  }

  cancelEditing(row: Department): void {
    row.editing = false;
    if (row.departmentBackup !== undefined) {
      row.department = row.departmentBackup;
      delete row.departmentBackup;
    }
    if (row.statusBackup !== undefined) {
      row.status = row.statusBackup;
      delete row.statusBackup;
    }
  }

  addNewRow(): void {
    const newRow: Department = { department: '', description: '', status: 'Active', editing: true, isNew: true };
    this.dataSource.data.unshift(newRow);
    this.dataSource.data = [...this.dataSource.data];
    this.startEditing(newRow);
  }

  removeNewRow(row: Department): void {
      const index = this.dataSource.data.indexOf(row);
      if (index > -1) {
          this.dataSource.data.splice(index, 1);
          this.dataSource.data = [...this.dataSource.data];
      }
  }
}
