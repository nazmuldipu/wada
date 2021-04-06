export interface Order {
    _id: string;
    orderNumber: string;
    orderDate: string;
    orderStatus: string;
    items: ProductListCart[];
    sub_total: number;
    promo_discount: number;
    total_discount: number;
    total_tax: number;
    shipping_charge: number;
    total: number;

    customer: User;
    address: string;

    paymentStatus: string;
    paymentMethod: string;

    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;

}

export interface OrderPage {
    docs: Order[];
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
    name: string;
    phone: string;
}

interface Stat {
    date: Date;
    label: string;
}
