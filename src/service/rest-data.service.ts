import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.PROTOCOL}://${environment.SERVER}${environment.PORT}/`;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  obtainToken(phone: string, password: string): Observable<any> {
    const value = { phone, password };
    return this.http
      .post<any>(this.baseUrl + 'api/auth', value)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = { code: null, message: 'Unknown error!' };
    if (error.error instanceof ErrorEvent) {
      errorMessage = { code: 0, message: error.error.message };
      // `Error: ${error.error.message}`; // Client-side errors
    } else {
      errorMessage = { code: error.status, message: error.error }; // `Error Code: ${error.status}\n Message: ${error.error}`; // Server-side errors
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendRequest(
    method: string,
    url: string,
    body?,
    auth: boolean = false,
    params?: HttpParams
  ): Observable<any> {
    // if no authentication required
    if (!auth) {
      const req = new HttpRequest(method, this.baseUrl + url, body, {
        params,
        responseType: 'json',
      });

      return this.http.request(req).pipe(
        map((event) => {
          return event['body'];
        }),
        catchError(this.handleError)
      );
    }
    //if auth required
    else {
      const headers = new HttpHeaders().set(
        'x-auth-token',
        localStorage.getItem('token')
      );

      const req = new HttpRequest(method, this.baseUrl + url, body, {
        headers: headers,
        responseType: 'json',
        params,
      });
      return this.http.request(req).pipe(
        map((event) => {
          return event['body'];
        }),
        catchError(this.handleError)
      );
    }
  }
}
