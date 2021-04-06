export interface Cart {
    product_list: ProductListCart[];
    total: number;
    createdBy: User;
    updatedBy: User;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductListCart {
    product: Product;
    quantity: number;
    rate: number;
    discounts: Discount[];
    amount: number;
}

interface Product {
    _id: string;
    barcode: string;
    name: string;
    slug: string;
    size: string;
}

interface Discount {
    discount_type: string;
    amount: number;
}

interface Tax {
    tax_type: string;
    amount: number;
}

interface User {
    _id: string;
    name: string;
    phone: string;
}
