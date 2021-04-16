import { ProductDetails } from './product-details.model';

export interface Product {
  _id: string;
  name: string;
  slug: string;
  barcode: string;
  size: string;
  rating: number;
  point: number;
  description: string;
  price: number;
  mrp: number;
  category: SubObject;
  subCategory: SubObject;
  subSubCategory: SubObject;
  brand: SubObject;
  priority: number;
  active: boolean;
  publish: boolean;
  features: string[];
  createdAt: Date;
  image_count: number;
  image_urls: string[];
  thumb: string;

  details: ProductDetails;
}

interface SubObject {
  _id: string;
  name: string;
  slug: string;
}

export interface ProductPage {
  docs: Product[];
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
