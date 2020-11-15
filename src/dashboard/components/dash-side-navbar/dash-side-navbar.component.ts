import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dash-side-navbar',
  templateUrl: './dash-side-navbar.component.html',
  styleUrls: ['./dash-side-navbar.component.scss']
})
export class DashSideNavbarComponent implements OnInit {
  @Input() expand: boolean;
  @Input() roles: string[];

  navlink = 'dashboard';
  subNav = '';

  sidenav = [
    {
      name: 'Dashboard',
      icon: 'fa-tachometer',
      roles: ['ADMIN', 'SHOP', 'USER'],
      subnav: [
        {
          name: 'Analytics',
          icon: 'fa-pie-chart',
          roles: ['USER'],
          link: '/dashboard',
        },
        {
          name: 'Visits',
          icon: 'fa-line-chart',
          roles: ['SHOP'],
          link: '/dashboard',
        },
        {
          name: 'Widgets',
          icon: 'fa-windows',
          roles: ['ADMIN'],
          link: '/dashboard',
        },
      ],
    },
    // {
    //   name: 'Category',
    //   icon: 'fa-cubes',
    //   roles: ['ADMIN'],
    //   subnav: [
    //     {
    //       name: 'Categories', icon: 'fa-cube',
    //       roles: ['ADMIN'], link: '/dashboard/categories'
    //     },
    //     {
    //       name: 'Sub Categories', icon: 'fa-flask',
    //       roles: ['ADMIN'], link: '/dashboard/categories/sub-category'
    //     },
    //   ],
    // },
    {
      name: 'Product',
      icon: 'fa-tag',
      roles: ['ADMIN', 'SHOP'],
      subnav: [
        // {
        //   name: 'Brands', icon: 'fa-tags',
        //   roles: ['ADMIN'], link: '/dashboard/products/brands'
        // },
        {
          name: 'Storehouse',
          icon: 'fa-shield',
          roles: ['ADMIN'],
          link: '/dashboard/products/storehouse',
        },
        // {
        //   name: 'Shops', icon: 'fa-shopping-bag',
        //   roles: ['ADMIN'], link: '/dashboard/products/shops',
        // },
        {
          name: 'Products',
          icon: 'fa-shopping-bag',
          roles: ['SHOP', 'ADMIN'],
          link: '/dashboard/products/',
        },
        {
          name: 'Free Delivery',
          icon: 'fa-bicycle',
          roles: ['SHOP', 'ADMIN'],
          link: '/dashboard/products/free-delivery',
        },
        {
          name: 'New Products',
          icon: 'fa-file-text-o',
          roles: ['SHOP', 'ADMIN'],
          link: '/dashboard/products/new-products',
        },
      ],
    },
    {
      name: 'Inventory',
      icon: 'fa-houzz',
      roles: ['ADMIN', 'SHOP'],
      subnav: [
        { name: 'Add', icon: 'fa-plus', link: '/dashboard/inventory/add' },
        {
          name: 'Transfer',
          icon: 'fa-exchange',
          link: '/dashboard/inventory/transfer',
        },
        {
          name: 'Recieve',
          icon: 'fa-check',
          link: '/dashboard/inventory/receive',
        },
        {
          name: 'Convert',
          icon: 'fa-chrome',
          link: '/dashboard/inventory/convert',
        },
        { name: 'List', icon: 'fa-list', link: '/dashboard/inventory' },
        {
          name: 'Stocks',
          icon: 'fa-bar-chart',
          link: '/dashboard/inventory/stocks',
        },
      ],
    },
    {
      name: 'Users',
      icon: 'fa-users',
      roles: ['ADMIN'],
      subnav: [
        { name: 'List', icon: 'fa-list', link: '/dashboard/users' },
        {
          name: 'Reset password',
          icon: 'fa-key',
          link: '/dashboard/users/reset-password',
        },
      ],
    },
    {
      name: 'Orders',
      icon: 'fa-clone',
      roles: [],
      subnav: [
        {
          name: 'Cart',
          icon: 'fa-shopping-cart',
          link: '/dashboard/orders/cart',
        },
        {
          name: 'Orders',
          icon: 'fa-archive',
          link: '/dashboard/orders/my-orders',
        },
      ],
    },
    {
      name: 'Accessories',
      link: '/dashboard/categories/add',
      icon: 'fa-sign-language ',
      roles: ['USER'],
      subCagegories: [],
    },
  ];
  constructor() { }

  ngOnInit(): void { }

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
    if (!this.roles || this.roles.length == 0) return false;
    if (!roles || roles.length == 0) return true;

    let i, val;
    for (i = 0; i < this.roles.length; i++) {
      val = roles.includes(this.roles[0]);
      if (val) return true;
    }

    return false;
  }
}
