export interface Category {
    _id: string;
    name: string;
    slug: string;
    priority: number;
    image: File;
    thumb: File;
    createdAt: Date;
}