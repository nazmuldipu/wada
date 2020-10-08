import { ProductDetails } from './product-details.model';

export interface Product {
    _id: string;
    name: string;
    size: string;
    barcode: string;
    description: string;
    slug: string;
    rating: number;
    price: number;
    old_price: number;
    category: Category;
    sub_category: SubCategory;
    sub_sub_category: SubSubCategory;
    brand: Brand;
    priority: number;
    point: number;
    active: boolean;
    publish: boolean;
    image_count: number;
    image_urls: string[];
    thumb: any;
    inStock: boolean;
    isNew: boolean;
    isSale: boolean;
    details: ProductDetails
}

interface Category {
    _id: string;
    slug: string;
    name: string;
    image_urls: string[];
}

interface SubCategory {
    _id: string;
    slug: string;
    name: string;
    image_urls: string[];
}

interface SubSubCategory {
    _id: string;
    slug: string;
    name: string;
    image_urls: string[];
}

interface Brand {
    _id: string;
    name: string;
    slug: string;
    image_urls: string[];
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