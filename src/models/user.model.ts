export interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  cus_add1: string;
  cus_add2: string;
  cus_city: string;
  cus_country: string;
  deliveryInstruction: string;
  role: string;
  createdAt: Date;
  active: boolean;
}

export interface UserPage {
  docs: User[];
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
