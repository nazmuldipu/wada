export interface Feature {
    _id: string;
    name: string;
    slug: string;
    priority: number;
    createdAt: Date;
    products: Product[];
    image_urls: string[];
}

export interface FeaturePage {
    docs: Feature[];
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
    barcode: string;
    name: string;
    slug: string;
    size: string;
}

