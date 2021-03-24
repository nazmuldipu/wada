export interface Brand {
  _id: string;
  name: string;
  slug: string;
  priority: number;
  createdAt: Date;
  image_urls: String[];
}

export interface BrandPage {
  docs: Brand[];
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
