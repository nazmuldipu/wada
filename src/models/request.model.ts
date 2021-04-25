export interface ProductRequest {
    _id: string;
    product: Product;
    createdAt: Date;
    createdBy: User;
    requestStatus: string;
}

export interface ProductRequestPage {
    docs: ProductRequest[];
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