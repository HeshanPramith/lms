import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { ApplyleaveComponent } from '../modules/applyleave/applyleave.component';
import { RequestedleavesComponent } from '../modules/requestedleaves/requestedleaves.component';
import { DepartmentComponent } from '../modules/department/department.component';
import { EmployeeComponent } from '../modules/employee/employee.component';
import { ApplyadvanceComponent } from '../modules/applyadvance/applyadvance.component';
import { LoginComponent } from '../modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applyleave', component: ApplyleaveComponent },
  { path: 'requestedleave', component: RequestedleavesComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'salaryadvance', component: ApplyadvanceComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
