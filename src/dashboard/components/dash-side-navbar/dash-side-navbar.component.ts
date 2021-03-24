import { Component, Input, OnInit } from '@angular/core';
import { SideNavbar } from '../../../shared/data/data';

@Component({
  selector: 'dash-side-navbar',
  templateUrl: './dash-side-navbar.component.html',
  styleUrls: ['./dash-side-navbar.component.scss'],
})
export class DashSideNavbarComponent {
  @Input() expand: boolean;
  @Input() role: string;

  navlink = 'dashboard';
  subNav = '';
  sidenav = SideNavbar;

  onNavLink(link) {
    if (this.navlink === link) {
      this.navlink = '';
    } else {
      this.navlink = link;
    }
  }

  onSubNav(link) {
    this.subNav = link;
  }

  validateRole(roles: string[]): boolean {
    if (!this.role || this.role.length == 0) return false;
    if (!roles || roles.length == 0) return true;

    return roles.includes(this.role);
  }
}
