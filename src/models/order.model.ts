export interface Order {
    _id: string;
    product_list: Product_list_cart[];
    poll: number;
    sub_total: number;
    promo_discount: number;
    total_discount: number;
    total_tax: number;
    vat_and_service: number;
    shipping_charge: number;
    payable: number;
    advance: number;
    due: number;
    createdAt: Date;
    createdBy: User;
    updatedAt: Date;
    updatedBy: User;
    customer: User;

    manualOrder: boolean;
    confirmed: boolean;
    approved: boolean;
    paid: boolean;
    cancelled: boolean;
    status: Stat[];
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

export interface Product_list_cart {
    product: Product;
    quantity: number;
    rate: number;
    discounts: Discount[];
    taxes: Tax[];
    commission: number;
    amount: number;
}

interface Product {
    _id: string,
    name: string,
    slug: string
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
