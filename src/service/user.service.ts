import { Injectable } from '@angular/core';
import { RestDataService } from './rest-data.service';
import { User, UserPage } from 'src/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { Pagination } from 'src/models/pagination.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'api/users';

  userSource = new BehaviorSubject<User>({} as User);
  user$ = this.userSource.asObservable();

  constructor(private dSrc: RestDataService, private util: UtilService) { }

  userRegistration(user: User): Observable<User> {
    return this.dSrc.sendRequest('POST', this.url, user, false, null);
  }

  getList(pagi: Pagination): Observable<UserPage> {
    const sparam = this.util.paginationToHttpParam(pagi);
    return this.dSrc.sendRequest('GET', this.url, null, true, sparam);
  }

  update(id, user): Observable<User> {
    return this.dSrc.sendRequest('PUT', this.url + `/${id}`, user, true, null);
  }

  updateProfile(user: User): Observable<User> {
    return this.dSrc.sendRequest('PUT', this.url + `/update`, user, true, null);
  }
  
  updateProfileByAdmin(id, user: User): Observable<User> {
    return this.dSrc.sendRequest('PUT', this.url + `/updateProfile/${id}`, user, true, null);
  }

  getAll(): Observable<User[]> {
    return this.dSrc.sendRequest('GET', this.url, null, true, null);
  }

  get(id): Observable<User> {
    return this.dSrc.sendRequest('GET', this.url + `/${id}`, null, true, null);
  }

  search(param: string): Observable<User[]> {
    const paramUrl = new HttpParams().set('param', param);
    return this.dSrc.sendRequest('GET', this.url + '/search', null, false, paramUrl);
  }

  getUserProfile(): Observable<User> {
    return this.dSrc.sendRequest('GET', this.url + '/me', null, true, null);
  }

  resetPassword(id, password: string): Observable<any> {
    const value = { password };
    return this.dSrc.sendRequest('PATCH', this.url + `/change-password/${id}`, value, true, null);
  }

  changePassword(value): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/changePassword`, value, true, null);
  }

  toggleActive(id): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/activate/${id}`, null, true, null);
  }
  otpActivate(body): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/otpActivate`, body, false, null);
  }

  sendOTP(phone): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/sendOTP/${phone}`, null, false, null);
  }

  resetOTPPassword(body): Observable<any> {
    return this.dSrc.sendRequest('PATCH', this.url + `/password-reset`, body, false, null);
  }
}
