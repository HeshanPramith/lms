import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
    constructor(private router: Router, private sidebarService: SidebarService) {}

    isActive(route: string): boolean {
        return this.router.isActive(route, true);
    }
    
    isHidden: boolean = false;

    toggleSidebar() {
      this.isHidden = !this.isHidden;
      this.sidebarService.toggleSidebar();
    }
}
