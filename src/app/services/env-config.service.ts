import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError, timeout } from 'rxjs';
import { api_url } from '../constants';

@Injectable({
  providedIn: 'root'
})

export class EnvConfigService {

  apiResponseTimeOut = 2 * 60 * 1000;
  constructor(
    private http: HttpClient
  ) { }

  getConfig(applicationType: string): Observable<any> {
    try {
      const url = `${api_url.getBusinessConfig}${applicationType}`;
      return this.getMethod(url).pipe(
        map(res => res.Response),
      )
    } catch (error) {
      console.error(error);
      return of({});
    }
  }

  getMethod(url: string): Observable<any> {
    return this.http.get(url).pipe(
      timeout(this.apiResponseTimeOut),
    )
  }

  performSaveConfigTransaction(payload: any, applicationType: string = 'EBS'): Observable<any> {
    const reqHeaders = new HttpHeaders({
      'application-type': applicationType
    });
    return this.http.post(api_url.updateBusinessConfig, payload, { headers: reqHeaders }).pipe(
      map((res: any) => res.Response),
      timeout(this.apiResponseTimeOut),
      catchError(this.handleError)
    );
  }
  getCloudConfig(applicationType: string): Observable<any> {
    try {
      const url = `${api_url.getBusinessConfig}${applicationType}`;
      return this.getMethod(url).pipe(
        map(res => res.Response),
      )
    } catch (error) {
      console.error(error);
      return of({});
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    let errorMessage = 'An unknown error occurred!';
    if (error.status === 0) {
      errorMessage = 'Network error: Please check your connection.';
    } else if (error.status >= 400 && error.status < 500) {
      errorMessage = `Client error: ${error.message || error.statusText}`;
    } else if (error.status >= 500) {
      errorMessage = `Server error: ${error.message || error.statusText}`;
    } else if (error instanceof ErrorEvent && error.message.includes('timeout')) {
      errorMessage = 'The request timed out. Please try again later.';
    }
    return throwError(() => new Error(errorMessage));
  }
}