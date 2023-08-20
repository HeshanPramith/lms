import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../employee.model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-employee-add-modal',
  templateUrl: './employee-add-modal.component.html',
  styleUrls: ['./employee-add-modal.component.sass'],
})
export class EmployeeAddModalComponent implements OnInit {

  mode: 'add' | 'edit';

  leaveControl = new FormControl<Employee | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  reportingOfficers: string[] = [
    'Tharindu Wijesuriya',
    'Priyanwada Munasinghe',
  ];

  salutations: string[] = [
    'Mr',
    'Mrs',
  ];

  genders: string[] = [
    'Male',
    'Female',
  ];

  departments: string[] = [
    'HR /Admin',
    'Development',
    'Sales',
    'Help Desk',
    'Marketing',
    'Finance',
    'GIS',
  ];

  empcatrgories: string[] = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];

  newEmployeeData: Employee = {
    epfNumber: this.data.nextEpfNumber,
    salutation: '',
    gender: '',
    firstName: '',
    middleName: '',
    lastName: '',
    department: '',
    designation: '',
    employeeCategory: '',
    email: '',
    reportingOfficer: '',
    joinedDate: '',
    contractEndDate: '',
    nic: '',
    mobile: '',
    telephone: '',
    utilizedAnnualCount: 0,
    utilizedCasualCount: 0,
    utilizedShortLeaveCount: 0,
    status: 'Active',
    empimage: '../../../../assets/img/userdef.png',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mode: 'add' | 'edit';
      nextEpfNumber: string;
      employee: Employee;
    },
    private dialogRef: MatDialogRef<EmployeeAddModalComponent>
  ) {
    this.mode = data.mode;
  }

  ngOnInit() {
    if (this.mode === 'edit') {
      // Initialize form fields with the employee data for editing
      this.newEmployeeData = { ...this.data.employee };
    }
  }

  onAddClick(): void {
    this.dialogRef.close(this.newEmployeeData);
  }

  updateRowClass(newEmployeeData: Employee, isChecked: boolean) {
    const rowElement = document.getElementById(
      `employee-row-${newEmployeeData.epfNumber}`
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
  
  
}
