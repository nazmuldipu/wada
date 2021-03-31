export interface InventoryPage {
  docs: Inventory[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
}

export interface Inventory {
  _id: string;
  inventoryType: InventoryType;
  reference: string;
  warehouse: Object;
  from: Object;
  supplier: User;
  items: ProductItem[];
  createdBy: User;
  updatedBy: User;
  createdAt: Date;
  updatedAt: Date;
}

enum InventoryType {
  IN = 'in',
  TRANSFER = 'transfer',
  SAMPLE = 'sample',
  DAMAGE = 'damage',
}

interface ProductItem {
  product: Product;
  quantity: number;
  purchase_price: number;
}

interface User {
  _id: string;
  name: string;
  phone: string;
}

interface Product {
  _id: string;
  barcode: string;
  name: string;
  slug: string;
  size: string;
}

interface Object {
  _id: string;
  name: string;
  slug: string;
}
