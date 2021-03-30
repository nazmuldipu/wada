export interface Stock {
  _id: string;
  product: Product;
  warehouse: Object;
  stock_level: number;
  quantity: number;
  purchase_price: number;
}

export interface StockPage {
  docs: Stock[];
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

interface Product {
  _id: string;
  name: string;
  slug: string;
  size: string;
  barcode: string;
}

interface Object {
  _id: string;
  name: string;
  slug: string;
}
