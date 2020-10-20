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
    reference: string;
    inventoryType: string;
    storehouse: Storehouse;
    from: Storehouse;
    supplier: User;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
    items: ProductItem[];
}

interface ProductItem {
    product: Product;
    quantity: number;
    purchase_price: number;
}

interface User {
    _id: string,
    name: string;
    phone: string;
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