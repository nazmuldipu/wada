export interface Storehouse {
    _id: string;
    name: string;
    slug: string;
    storekeeper_name: string;
    storekeeper_number: string;
    address: string;
    priority: number;
    latitude: number;
    longitude: number;
    description: string;
    createdAt: Date;
}

export interface StorehousePage {
    docs: Storehouse[];
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