import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/shared/models/product.model';
import { Category } from 'src/shared/models/category.model';
import { SubCategory } from 'src/shared/models/sub-category.model';
import { SubSubCategory } from 'src/shared/models/sub-sub-category.model';
import { Brand } from 'src/shared/models/brand.model';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent extends BaseFormComponent {
  @Input() brands: Brand[];
  @Input() categories: Category[];
  @Input() subCategories: SubCategory[];
  @Input() subSubCategories: SubSubCategory[];

  @Output() selectCategory = new EventEmitter<string>();
  @Output() selectSubCategory = new EventEmitter<string>();

  brand;
  category;
  subCategory;
  subSubCategory;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    super();
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (changes.item && this.item) {
      this.onBrand(this.item['brand']['_id']);
      this.onCategory(this.item['category']['_id']);
    }

    if (changes.subCategories && this.item && this.item['subCategory']) {
      this.onSubCategory(this.item['subCategory']['_id']);
    }
    if (changes.subSubCategories && this.item && this.item['subSubCategory']) {
      this.onSubSubCategory(this.item['subSubCategory']['_id']);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      barcode: ['', [Validators.required, Validators.min(0)]],
      size: ['', Validators.required],
      point: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      mrp: [0, [Validators.required, Validators.min(0)]],
      brandId: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required],
      subSubCategoryId: [''],
      priority: [0, [Validators.required, Validators.min(0)]],
      images: [null],
      thumb: [null],
    });
  }

  onBrand(id) {
    this.brand = this.brands.find((b) => b._id == id);
    this.form.patchValue({ brandId: this.brand._id });
  }

  onCategory(id) {
    this.category = this.categories.find((c) => c._id == id);
    this.form.patchValue({ categoryId: this.category._id });
    this.selectCategory.emit(this.category.slug);
  }

  onSubCategory(id) {
    this.subCategory = this.subCategories.find((sc) => sc._id == id);
    this.form.patchValue({ subCategoryId: this.subCategory._id });
    this.selectSubCategory.emit(this.subCategory.slug);
  }

  onSubSubCategory(id) {
    this.subSubCategory = this.subSubCategories.find((sc) => sc._id == id);
    this.form.patchValue({ subSubCategoryId: this.subSubCategory._id });
  }

  onBrandChange() {
    this.brand = null;
    this.onCategoryChange();
  }

  onCategoryChange() {
    this.category = null;
    this.onSubCategoryChange();
  }

  onSubCategoryChange() {
    this.subCategory = null;
    this.subSubCategory = null;
  }

  onSubSubCategoryChange() {
    this.subSubCategory = null;
  }

  onError(event) {
    this.err = event;
  }

  clean() {
    super.clean();
    this.brand = null;
    this.category = null;
    this.subCategory = null;
    this.subSubCategory = null;
  }
}
