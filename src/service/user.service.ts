import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { User, UserPage } from 'src/shared/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Pagination } from 'src/shared/models/pagination.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'api/users';

  _userSource = new BehaviorSubject<User>({} as User);
  user$ = this._userSource.asObservable();

  constructor(private dSrc: RestDataService, private util: UtilService) {}

  userRegistration(user: User): Observable<User> {
    return this.dSrc.sendRequest('POST', this.userUrl, user, false, null);
  }

  getList(pagi: Pagination): Observable<UserPage> {
    let sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.userUrl, null, true, sparam);
  }

  update(id, user): Observable<User> {
    return this.dSrc.sendRequest(
      'PUT',
      this.userUrl + `/${id}`,
      user,
      true,
      null
    );
  }

  getAll(): Observable<User[]> {
    return this.dSrc.sendRequest('GET', this.userUrl, null, true, null);
  }

  get(id): Observable<User> {
    return this.dSrc.sendRequest(
      'GET',
      this.userUrl + `/${id}`,
      null,
      true,
      null
    );
  }

  search(param: string): Observable<User[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dSrc.sendRequest(
      'GET',
      this.userUrl + '/search',
      null,
      false,
      paramUrl
    );
  }

  getUserProfile(): Observable<User> {
    return this.dSrc.sendRequest('GET', this.userUrl + '/me', null, true, null);
  }

  resetPassword(id, password: string): Observable<any> {
    const value = { password };
    return this.dSrc.sendRequest(
      'PATCH',
      this.userUrl + `/change-password/${id}`,
      value,
      true,
      null
    );
  }

  changePassword(value): Observable<any> {
    return this.dSrc.sendRequest(
      'PATCH',
      this.userUrl + `/changePassword`,
      value,
      true,
      null
    );
  }
}
