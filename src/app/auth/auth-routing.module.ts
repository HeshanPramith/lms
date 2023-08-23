import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../core/layout/main/main.component';

const routes: Routes = [
    { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthRoutingModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
