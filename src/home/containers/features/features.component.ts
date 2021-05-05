import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import { Cart, ProductListCart } from 'src/models/cart.model';
import { Pagination } from 'src/models/pagination.model';
import { Product, ProductPage } from 'src/models/product.model';
import { CartService } from 'src/service/cart.service';
import { FeaturesService } from 'src/service/features.service';
import { ProductService } from 'src/service/product.service';
import { RequestService } from 'src/service/request.service';
import { ModalMessageComponent } from 'src/shared/components/modal-message/modal-message.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  slug;
  slugId;
  product: Product;
  productList: Product[] = [];
  productPage: ProductPage;
  cart: Cart;
  productListCart: ProductListCart;

  bannerUrl;
  prodThumbUrl;
  prodImageUrl;
  loading = false;
  errMsg = '';

  constructor(
    private featuresService: FeaturesService,
    private productService: ProductService,
    private cartService: CartService,
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router) {
    this.bannerUrl = this.featuresService.imageLink + '/image/';
    this.prodImageUrl = this.productService.imageLink + '/image/';
    this.prodThumbUrl = this.productService.imageLink + '/thumb/';
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((data) => {
      this.cart = data;
    });

    this.activeRoute.params.subscribe((params) => {
      const slug = params.slug;

      if (this.slug && this.slug !== slug) {
        // window.scroll(0, 0);
        this.productList = [];
      }

      if (slug) {
        this.slug = slug;
        this.featuresService.features$.pipe(take(2),).subscribe(data => {
          const feat = data.find(f => f.slug === slug);
          this.slugId = feat ? feat._id : null;
        })

        this.getProductBySubCategory(this.slug, new Pagination());
        this.onScroll();
      }
    })
  }

  async getProductBySubCategory(slug: string, pagi: Pagination): Promise<void> {
    try {
      this.loading = true;
      this.productPage = await this.productService.byFeature(slug, pagi).toPromise();
      this.productList.push(...this.productPage.docs);
      // window.scroll(0, 0);
    } catch (error) {
      this.errMsg = error.message;
    }
    this.loading = false;
  }

  onScroll(): void {
    if (this.productPage?.nextPage) {
      this.getProductBySubCategory(this.slug, new Pagination(this.productPage.nextPage));
    }
  }

  onCartClick(): void {
    this.router.navigate(['/cart']);
  }

  onCloseClick() {
    this.errMsg = '';
  }

  onShortDetails(targetModal, product: Product): void {
    console.log(targetModal);
    this.product = product;
    if (
      this.cart &&
      this.cart.product_list &&
      this.cart.product_list.length > 0
    ) {
      this.productListCart = this.cart.product_list.find(
        (pl) => pl.product._id === product._id
      );
    }
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl',
      scrollable: true,
    });
  }

  async onAddToCart(event): Promise<void> {
    this.errMsg = '';
    this.loading = true;
    try {
      const resp = await this.cartService.addToCart(event).toPromise();
      this.cartService.cartSource.next(resp);
    } catch (error) {
      this.stockRequestModal(event, error);
    }
    this.loading = false;
  }

  stockRequestModal(event, error): void {
    const modalRef = this.modalService.open(ModalMessageComponent);
    const { message } = error;
    const buttons = [{ key: 'request', text: 'Request for stock', type: 'btn-info' }];
    modalRef.componentInstance.message = { message, type: 'danger', buttons };
    modalRef.componentInstance.btnEvent.subscribe(($e) => {
      console.log($e);
      console.log(event.productId);
      this.requestService.create({ productId: event.productId }).toPromise();
      // TODO: request for stock heres
      modalRef.close();
      const modalRef2 = this.modalService.open(ModalMessageComponent);
      modalRef2.componentInstance.message = { message: 'Your request has been successfully submitted', type: 'success', buttons: [] };
    });
  }
}

