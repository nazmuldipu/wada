export interface Order {
    _id: string;
    orderNumber: string;
    orderDate: string;
    items: ProductListCart[];
    sub_total: number;
    promotional_discount: number;
    total_discount: number;
    total_tax: number;
    shipping_charge: number;
    total: number;

    customer: Customer;
    address: string;

    orderStatus: string;
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
    warehouses: Warehouse[];
    quantity: number;
    purchase_price: number;
    rate: number;
    discount: number;
    amount: number;
}

interface Product {
    _id: string;
    barcode: string;
    name: string;
    slug: string;
    size: string;
}

interface Warehouse {
    _id: string;
    name: string;
    slug: string;
    quantity: number;
}

interface User {
    name: string;
    phone: string;
}

interface Customer {
    _id: string;
    name: string;
    phone: string;
    cus_add1: string;
    cus_add2: string;
    cus_city: string;
    cus_country: string;
    deliveryInstruction: string;
}
