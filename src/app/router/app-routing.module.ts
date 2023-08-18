import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { ApplyleaveComponent } from '../modules/applyleave/applyleave.component';
import { RequestedleavesComponent } from '../modules/requestedleaves/requestedleaves.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'applyleave', component: ApplyleaveComponent },
  { path: 'requestedleave', component: RequestedleavesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
