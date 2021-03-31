export interface Warehouse {
  _id: string;
  name: string;
  slug: string;
  admin: User;
  address: string;
  priority: number;
  latitude: number;
  longitude: number;
  description: string;
  createdAt: Date;
}

interface User {
  _id: string;
  name: string;
  phone: string;
}

export interface WarehousePage {
  docs: Warehouse[];
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
