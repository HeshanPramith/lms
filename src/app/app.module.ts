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
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyLeaveModalComponent } from './modules/applyleave/apply-leave-modal/apply-leave-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestedleavesComponent } from './modules/requestedleaves/requestedleaves.component';
import { RequestedLeaveModalComponent } from './modules/requestedleaves/requested-leave-modal/requested-leave-modal.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
