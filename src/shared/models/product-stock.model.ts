export interface ProductStock {
    _id: string;
    product: Product;
    storehouse: Storehouse;
    quantity: number;
    purchase_price: number;
}

export interface ProductStockPage {
    docs: ProductStock[];
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
    _id: string,
    name: string,
    slug: string
}

interface Storehouse {
    _id: string,
    name: string,
    slug: string
}