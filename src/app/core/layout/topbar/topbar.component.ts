import { Component } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.sass']
})
export class TopbarComponent {

  constructor(private sidebarService: SidebarService) {}
  
  isHidden: boolean = false;

  toggleSidebar() {
    this.isHidden = !this.isHidden;
    this.sidebarService.toggleSidebar();
  }
}
