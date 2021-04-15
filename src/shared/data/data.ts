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
    name: 'Products',
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
    name: 'Features',
    icon: 'fa-cubes',
    roles: ['ADMIN'],
    subnav: [
      {
        name: 'List',
        icon: 'fa-list',
        roles: ['ADMIN'],
        link: '/dashboard/features',
      },
      {
        name: 'Products',
        icon: 'fa-object-group',
        roles: ['ADMIN'],
        link: '/dashboard/features/products',
      },
    ]
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
    roles: ['ADMIN', 'INVENTORY_ADMIN'],
    subnav: [
      {
        name: 'Search',
        icon: 'fa-search',
        link: '/dashboard/orders/search',
      },
      {
        name: 'Orders',
        icon: 'fa-file-text-o',
        link: '/dashboard/orders',
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

export const FeaturesPriorities = [
  { _id: 0, name: 'Navbar' },
  { _id: 1, name: 'Main Banner' },
  { _id: 2, name: 'EXCLUSIVE MULTIBUY' },
  { _id: 3, name: 'SPECIAL OFFER' },
  { _id: 4, name: 'FEATURED OFFERS' },
];

export const CompanyInfo = {
  name: 'Wada Bangladesh Limited',
  address1: '32/1, Mipur Road, Khan Plaze (3rd Floor), Science Lab',
  address2: 'Dhanmondi, Dhaka-1205',
  email: 'support@wada.com.bd',
  mobile: '+88 01730 785675',
  site: 'Wada.com.bd',
  web: 'www.wada.com.bd',
  phones: '01730785675-9',
  facebook: 'www.facebook.com',
  linkdin: 'www.linkedin.com',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/'
};

export const OrderStatus = [
  { name: 'Cancelled', text: 'Cancelled' },
  { name: 'Delivered', text: 'Delivered' },
  { name: 'InTransit', text: 'InTransit' },
  { name: 'PaymentDue', text: 'PaymentDue' },
  { name: 'PickupAvailable', text: 'PickupAvailable' },
  { name: 'Problem', text: 'Problem' },
  { name: 'Processing', text: 'Processing' },
  { name: 'Returned', text: 'Returned' }
];

export const PaymentMethods = [
  { name: 'cod', text: 'Cash On Delivery', img: 'assets/images/paymets/cashOnDelivery.png' },
  { name: 'aamarpay', text: 'AamarPay', img: 'assets/images/paymets/aamarpay.png' },
];
// { name: 'bkash', text: 'BKash', img: 'assets/images/paymets/bkash.png' },

export const PaymentStatus = [
  { name: 'Cancelled', text: 'Cancelled' },
  { name: 'Due', text: 'Due' },
  { name: 'Paid', text: 'Paid' },
];
