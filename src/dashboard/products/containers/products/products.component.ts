import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/service/product.service';
import { ToastService } from 'src/service/toast.service';
import { CategoryTree } from 'src/shared/data/category';
import { Product, ProductPage } from 'src/shared/models/product.model';
import { BrandsObjects } from 'src/shared/data/brands';
import { ProductDetailsService } from 'src/service/product-details.service';
import { UtilService } from 'src/service/util.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  sideNav = CategoryTree;

  product: Product;
  productsPage: ProductPage;
  categories = [];
  subCategories = [];
  subSubCategories = [];
  brands;
  // brands: Brand[] = [];
  imageUrl = '';
  thumbUrl = '';
  message = '';
  errorMessage = '';

  loading = false;
  showProductForm = false;
  showProductDetailsForm = false;

  constructor(
    private productService: ProductService,
    private productDetailsService: ProductDetailsService,
    private utilService: UtilService,
    public toastService: ToastService
  ) {
    this.brands = BrandsObjects;
    this.imageUrl = this.productService.productLink + '/image/';
    this.thumbUrl = this.productService.productLink + '/thumb/';
  }

  ngOnInit(): void {
    // this.getAllProducts();
    this.getAllCategory();
    // this.getAllSubCategory();
    this.getAllBrand();
  }

  async getAllProducts(
    page: number = 1,
    limit: number = 8,
    sort: string = 'priority',
    order: string = 'asc'
  ) {
    this.loading = true;
    try {
      this.productsPage = await this.productService
        .getAll(page, limit, sort, order)
        .toPromise();
      this.productsPage.docs.sort(
        this.utilService.dynamicSortObject('priority')
      );
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  onChangePage(page) {
    this.getAllProducts(page.pageNumber, page.limit, page.sort, page.order);
  }

  async getAllCategory() {
    this.categories = this.sideNav.category;
    // this.loading = true;
    // try {
    //   this.categories = await this.categoryService.getAll().toPromise();
    // } catch (error) {
    //   this.errorMessage = error;
    // }
    // this.loading = false;
  }

  async getAllSubCategory(
    page: number = 1,
    limit: number = 8,
    sort: string = 'priority',
    order: string = 'asc'
  ) {
    // this.loading = true;
    // try {
    //   this.subCategories = await this.subCategoryService.getAll(page, limit, sort, order).toPromise();
    // } catch (error) {
    //   this.errorMessage = error;
    // }
    // this.loading = false;
  }

  async onBrandSearch(event) {
    this.brands = BrandsObjects.filter((item) =>
      Object.keys(item).some(
        (k) =>
          item[k] != null &&
          item[k].toString().toLowerCase().includes(event.toLowerCase())
      )
    );
  }

  async getAllBrand(page: number = 1, limit: number = 8, sort: string = 'priority', order: string = 'asc') {
    this.brands = BrandsObjects;
    // this.loading = true;
    // try {
    //   const value = await this.brandService.getAll(page, limit, sort, order).toPromise();
    //   this.brands = value.docs;
    //   // this.brands.sort(this.utilService.dynamicSortObject('priority'));
    // } catch (error) {
    //   this.errorMessage = error;
    // }
    // this.loading = false;
  }

  async getProductDetails(product_id: string) {
    this.loading = true;
    try {
      const prod = this.productsPage.docs.find((c) => c._id == product_id);
      this.product = Object.assign({}, prod);

      const proDetails = await this.productDetailsService
        .getProductDetailsByProductId(product_id)
        .toPromise();
      this.product.details = proDetails;
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  onShowProductForm() {
    this.showProductForm = true;
  }

  onEdit(id) {
    const value = this.productsPage.docs.find((c) => c._id == id);
    this.product = Object.assign({}, value);
    this.showProductForm = true;
  }

  onDetails(id) {
    this.getProductDetails(id);
    this.showProductForm = false;
  }

  onProductDetails(id) {
    this.showProductDetailsForm = true;
  }

  async onAddProductDetails(event) {
    this.loading = true;
    try {
      const resp = await this.productDetailsService
        .add(this.product._id, event)
        .toPromise();
      this.showProductDetailsForm = false;
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onDeleteDetails(title) {
    this.loading = true;
    try {
      const resp = await this.productDetailsService
        .remove(this.product._id, title)
        .toPromise();
      this.onClose();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
    console.log(title);
  }

  
  async onCreate(event) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    try {
      const resp = await this.productService.create(event).toPromise();
      this.message = 'Product created';
      this.productsPage.docs.push(resp);
      this.showProductForm = false;
    } catch (error) {
      this.errorMessage = error;
    }
    this.loading = false;
  }

  async onUpdate(event) {
    this.loading = true;
    this.errorMessage = '';
    this.message = '';
    const sid = this.product._id;
    try {
      const resp = await this.productService.update(sid, event).toPromise();
      this.message = 'Product updated';
      this.showProductForm = false;
      this.product = null;
      this.getAllProducts();
    } catch (err) {
      this.errorMessage = err;
    }
    this.loading = false;
  }

  async onToggleActive(id, active) {
    if (
      confirm('Are you sure to ' + (active ? 'Dectivate' : 'Activate') + ' ?')
    ) {
      try {
        const res = await this.productService.toggleActive(id).toPromise();

        const mesg = res.name + (res.active ? ' Activated' : ' Dectivated');
        const classname =
          'text-light' + (res.approved ? ' bg-primary' : ' bg-danger');
        this.toastService.show(mesg, { classname, delay: 3000 });

        this.productsPage.docs.splice(
          this.productsPage.docs.findIndex((s) => s._id == id),
          1,
          res
        );
      } catch (err) {
        this.errorMessage = err;
      }
    }
  }

  onClose() {
    this.product = null;
    this.showProductForm = false;
    this.loading = false;
    this.message = '';
    this.errorMessage = '';
  }

  counter(i: number) {
    return new Array(i);
  }
}
