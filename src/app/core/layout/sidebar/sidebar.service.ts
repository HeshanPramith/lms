import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isSidebarHidden = new BehaviorSubject<boolean>(false);

  toggleSidebar() {
    this.isSidebarHidden.next(!this.isSidebarHidden.value);
  }

  getSidebarState() {
    return this.isSidebarHidden.asObservable();
  }
}
