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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ApplyleaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
