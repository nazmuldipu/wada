import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/shared/models/user.model';
import { RestDataService } from './rest-data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User;

  constructor(private datasource: RestDataService, private router: Router) {}

  authenticate(phone: string, password: string): Observable<any> {
    return this.datasource.obtainToken(phone, password);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'ADMIN';
  }

  isUser(): boolean {
    const role = localStorage.getItem('role');
    return role === 'USER';
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
