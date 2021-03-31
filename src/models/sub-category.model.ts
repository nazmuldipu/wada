export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  priority: number;
  category: Category;
  createdAt: Date;
  image_urls: String[];
}

export interface SubCategoryPage {
  docs: SubCategory[];
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

interface Category {
  _id: string;
  name: string;
  slug: string;
}
