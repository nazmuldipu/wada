export interface ProductDetails {
    _id: string;
    product: Product;
    items: ProductDetailsItems[];
}

interface Product {
    name: string,
    slug: string
}

interface ProductDetailsItems {
    title: string;
    text: string;
    points: string[];
    image_urls: string;
}