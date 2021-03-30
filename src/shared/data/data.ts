export const SideNavbar = [
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
  {
    name: 'Settings',
    icon: 'fa-cog',
    roles: ['ADMIN'],
    subnav: [
      {
        name: 'Brands',
        icon: 'fa-pied-piper',
        roles: ['ADMIN'],
        link: '/dashboard/settings/brands',
      },
      {
        name: 'Categories',
        icon: 'fa-cube',
        roles: ['ADMIN'],
        link: '/dashboard/settings/categories',
      },
      {
        name: 'Sub Categories',
        icon: 'fa-tree',
        roles: ['ADMIN'],
        link: '/dashboard/settings/sub-categories',
      },
      {
        name: 'Sub Sub Categories',
        icon: 'fa-pagelines',
        roles: ['ADMIN'],
        link: '/dashboard/settings/sub-sub-categories',
      },
    ],
  },
  {
    name: 'Product',
    icon: 'fa-tag',
    roles: ['ADMIN', 'SHOP'],
    subnav: [
      {
        name: 'New Products',
        icon: 'fa-plus',
        roles: ['ADMIN'],
        link: '/dashboard/products/new-products',
      },
      {
        name: 'Products',
        icon: 'fa-shopping-bag',
        roles: ['SHOP', 'ADMIN'],
        link: '/dashboard/products/',
      },
      {
        name: 'Warehouse',
        icon: 'fa-shield',
        roles: ['ADMIN'],
        link: '/dashboard/products/warehouse',
      },
      // {
      //   name: 'Storehouse',
      //   icon: 'fa-shield',
      //   roles: ['ADMIN'],
      //   link: '/dashboard/products/storehouse',
      // },
      // {
      //   name: 'Shops', icon: 'fa-shopping-bag',
      //   roles: ['ADMIN'], link: '/dashboard/products/shops',
      // },

      // {
      //   name: 'Free Delivery',
      //   icon: 'fa-bicycle',
      //   roles: ['SHOP', 'ADMIN'],
      //   link: '/dashboard/products/free-delivery',
      // },
    ],
  },
  {
    name: 'Inventory',
    icon: 'fa-houzz',
    roles: ['ADMIN', 'SHOP'],
    subnav: [
      { name: 'Add', icon: 'fa-plus', link: '/dashboard/inventory/add' },
      { name: 'List', icon: 'fa-list', link: '/dashboard/inventory' },
      // {
      //   name: 'Transfer',
      //   icon: 'fa-exchange',
      //   link: '/dashboard/inventory/transfer',
      // },
      // {
      //   name: 'Recieve',
      //   icon: 'fa-check',
      //   link: '/dashboard/inventory/receive',
      // },
      // {
      //   name: 'Convert',
      //   icon: 'fa-chrome',
      //   link: '/dashboard/inventory/convert',
      // },
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

export const InventoryTypes = [
  { _id: 'in', name: 'In' },
  { _id: 'transfer', name: 'Transfer' },
  { _id: 'sample', name: 'Sample' },
  { _id: 'damage', name: 'Damage' },
];
