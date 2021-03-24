// export class Pagination {
//   page: number = 1;
//   limit: number = 8;
//   sort: string = 'name';
//   order: string = 'asc';
//   param: string = '';
// }

export class Pagination {
  constructor(
    public page: number = 1,
    public limit: number = 8,
    public sort: string = 'name',
    public order: string = 'asc',
    public param: string = ''
  ) {}
}
