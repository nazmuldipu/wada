import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { BaseFormComponent } from 'src/shared/forms/base-form/base-form.component';
import { Pagination } from 'src/models/pagination.model';
import { User } from 'src/models/user.model';
import { UserService } from '../../../../service/user.service';

@Component({
  selector: 'warehouse-assign-form',
  templateUrl: './warehouse-assign-form.component.html',
  styleUrls: ['./warehouse-assign-form.component.scss'],
})
export class WarehouseAssignFormComponent extends BaseFormComponent {
  searchUser = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => {
        if (term.length < 3) return [];
        return this.userService.getList(new Pagination(1, 10)).pipe(
          catchError(() => {
            return of([]);
          })
        );
      }),
      map((p) => (p ? p['docs'] : []))
    );

  formatter = (user: User) => {
    if (user) return user.name + '[' + user.phone + ']';
  };

  constructor(private fb: FormBuilder, private userService: UserService) {
    super();
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item && this.item) {
      this.form.patchValue({ warehouseId: this.item._id });
    }
  }

  onSelectUser(event) {
    this.form.patchValue({ userId: event.item._id });
  }

  createForm() {
    this.form = this.fb.group({
      warehouseId: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

}
