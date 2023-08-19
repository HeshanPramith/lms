import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from './core/layout/main/main.component';
import { TopbarComponent } from './core/layout/topbar/topbar.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AppRoutingModule } from './router/app-routing.module';
import { ApplyleaveComponent } from './modules/applyleave/applyleave.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyLeaveModalComponent } from './modules/applyleave/apply-leave-modal/apply-leave-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestedleavesComponent } from './modules/requestedleaves/requestedleaves.component';
import { RequestedLeaveModalComponent } from './modules/requestedleaves/requested-leave-modal/requested-leave-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DepartmentComponent } from './modules/department/department.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmployeeComponent } from './modules/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ApplyleaveComponent,
    ApplyLeaveModalComponent,
    RequestedleavesComponent,
    RequestedLeaveModalComponent,
    DepartmentComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
