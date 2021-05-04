import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { UserPage } from 'src/models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnChanges {
  @Input() userPage: UserPage;
  @Input() isAdmin = false;

  @Output() edit = new EventEmitter<string>();
  @Output() active = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<string>();

  tableName = 'User Table';
  columns: any[] = [
    { path: 'name', label: 'Name', searchable: true },
    { path: 'phone', label: 'Phone', searchable: true },
    { path: 'email', label: 'Email' },
    { path: 'role', label: 'Role' },
  ];

  sortColumn = {
    path: 'name',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const editBtn = {
      key: '_id',
      type: 'button',
      content: (brand) => {
        return {
          classname: 'edit_link',
          text: 'Select',
          link: `#`,
          event: { key: 'edit', id: brand._id },
        };
      },
    };

    if (this.isAdmin) {
      const actBtn = [
        { path: 'active', label: 'Active' },
        {
          key: '_id',
          type: 'button',
          content: (user) => {
            return {
              classname: 'edit_link',
              text: user?.active ? 'Deactivate' : 'Activate',
              link: `#`,
              event: { key: 'active', id: user._id },
            };
          },
        },]
      this.columns = [...this.columns, ...actBtn, editBtn]
    } else {
      this.columns = [...this.columns, editBtn]
    }
  }

  buttonEvent(event) {
    switch (event['key']) {
      case 'edit':
        this.edit.emit(event['id']);
        break;
      case 'active':
        this.active.emit(event.id);
        break;
    }
  }

  onRefresh(event) {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }


}
