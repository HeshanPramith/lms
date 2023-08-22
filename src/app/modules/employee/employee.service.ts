import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee.model'; // Import the Employee interface

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeDataSubject = new BehaviorSubject<Employee[]>([]);
  employeeData$ = this.employeeDataSubject.asObservable();

  constructor() {}

  updateEmployeeData(data: Employee[]) {
    this.employeeDataSubject.next(data);
  }
}
