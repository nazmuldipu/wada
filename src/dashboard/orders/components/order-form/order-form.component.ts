import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Pagination } from 'src/models/pagination.model';
import { User } from 'src/models/user.model';
import { UserService } from 'src/service/user.service';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent extends BaseFormComponent {
  user: User;

  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term.length < 3) return [];
        return this.userService
          .getList(new Pagination(1, 10, 'name', 'asc', term))
          .pipe(
            catchError(() => {
              return of([]);
            })
          );
      }),
      map((p) => (p ? p['docs'] : []))
    );

  userFormatter = (user: User) => {
    if (user) return `${user.name}  [${user.phone}]`;
  };

  constructor(private fb: FormBuilder, private userService: UserService, private modalService: NgbModal) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      customer: ['', Validators.required],
      items: this.fb.array([this.createItemArray()]),
    });
  }

  createItemArray() {
    return this.fb.group({
      product: ['', Validators.required],
      quantity: [0, Validators.required],
      max_quantity: [''],
    });
  }

  async onSelectCustomer(event, targetModal) {
    try {
      this.user = await this.userService.get(event.item._id).toPromise();
      if (this.user.cus_add1 && this.user.cus_add1.length > 2) {
        this.form.patchValue({ customer: this.user })
      } else {
        this.form.patchValue({ customer: "" })
        this.userProfileModal(targetModal);
      }
    } catch (err) {

    }
  }

  userProfileModal(targetModal): void {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'md',
      scrollable: true,
    });
  }

  pushOrderItem() {
    const control = <FormArray>this.form.get('items');
    control.push(this.createItemArray());
  }

  onRemoveOrderItem(event) {
    const control = <FormArray>this.form.get('items');
    control.removeAt(event);
  }
  async onUpdateProfile(uid, event) {
    this.modalService.dismissAll();
    console.log(uid);
    console.log(event);
    try {
      const resp = await this.userService.updateProfileByAdmin(uid, event).toPromise();
      this.form.patchValue({ customer: resp })
    } catch (err) {
      console.log(err.message);
    }
  }
}
