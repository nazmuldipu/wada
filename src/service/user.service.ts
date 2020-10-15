import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { User } from 'src/shared/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'api/users';

  private _userSource = new BehaviorSubject<User>({} as User);
  user$ = this._userSource.asObservable();

  constructor(private dataSource: RestDataService) { }

  userRegistration(user: User): Observable<User> {
    return this.dataSource.sendRequest('POST', this.userUrl, user, false, null);
  }

  update(id, user): Observable<User> {
    return this.dataSource.sendRequest(
      'PUT',
      this.userUrl + `/${id}`,
      user,
      true,
      null
    );
  }

  getAll(): Observable<User[]> {
    return this.dataSource.sendRequest('GET', this.userUrl, null, true, null);
  }

  get(id): Observable<User> {
    return this.dataSource.sendRequest(
      'GET',
      this.userUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  search(param: string): Observable<User[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dataSource.sendRequest('GET', this.userUrl + '/search', null, false, paramUrl)
  }

  getUserProfile() {
    this.dataSource
      .sendRequest('GET', this.userUrl + '/me', null, true, null)
      .pipe(take(2))
      .subscribe(
        (data) => {
          this._userSource.next(data);
        },
        (error) => {
          console.log('getUserProfile ERROR');
          console.log(error);
        }
      );
  }

  resetPassword(id, password: string): Observable<any> {
    const value = { password };
    return this.dataSource.sendRequest(
      'PATCH',
      this.userUrl + `/change-password/${id}`,
      value,
      true,
      null
    );
  }

  changePassword(value): Observable<any> {
    return this.dataSource.sendRequest('PATCH', this.userUrl + `/changePassword`, value, true, null);
  }
}