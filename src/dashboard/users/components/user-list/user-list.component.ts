import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserPage } from 'src/models/user.model';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() userPage: UserPage;

  @Output() edit = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<string>();

  tableName = 'User Table';
  columns = [
    { path: 'name', label: 'Name' },
    { path: 'phone', label: 'Phone' },
    { path: 'email', label: 'Email' },
    { path: 'role', label: 'Role' },
    {
      key: '_id',
      type: 'button',
      content: (brand) => {
        return {
          classname: 'edit_link',
          text: 'Edit',
          link: `#`,
          event: { key: 'edit', id: brand._id },
        };
      },
    },
  ];

  sortColumn = {
    path: 'name',
    order: 'asc',
    limit: 8,
    page: 1,
    search: '',
  };

  buttonEvent(event) {
    switch (event['key']) {
      case 'edit':
        this.edit.emit(event['id']);
        break;
    }
  }

  onRefresh(event) {
    this.sortColumn = { ...event };
    this.refresh.emit({ sort: event.path, ...event });
  }
}
