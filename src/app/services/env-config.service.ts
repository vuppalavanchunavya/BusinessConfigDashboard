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



  description = [
    "Enable to make transactions online",
    "Setting to control whether debug mode is enabled across the application.",
    "Interval in each real time sync happens(in mins)",
    "Time interval (in minutes) between each automatic refresh of transactional data in the application.",
    "",
    "Controls the visibility and interactivity of the UOM conversion field.",
    "Enable when manual scanning is required",
    "Enables or disables multi-lot and serial number management for an item.",
    "No. of days",
    "Enable when back direct org transfer is required",
    "Controls whether FIFO serial number suggestions are enabled",
    "Determines if inventory is managed by locator",
    "Set time out for API call in miliseconds",
    "App Idle Alert functionality enable if True",
    "App Idle Time (in min.)",
    "App Idle Alert Time (in min.)",
    "Show/hide only selected/scanned serial item",
    "",
    "Enable if you need QR based scan at Login Screen",
    "Enable if you want to skip the Scanning for one item in all 3 Page Modules",
    "Enable If you need Consolidate Receipt in Goods Receipt",
    "This login we use during production",
    "Controls if the base URL should change",
    "Loads all inventory organizations",
    "Enables label copy printing",
    "Enables Zebra scanning",
    "Enables sub-inventory reversal",
    "Enables cross-reference data usage",
    "Enables access token usage in APIs",
    "Specifies if item unlocking is required",
    "No. of days",
    "Enables pick consolidation",
    "Disables logging in the app",
    "Enables app version checking",
    "Enables pull-down refresh",
    "Controls keyboard visibility on input tap",
    "Sets the maximum number of query results",
    "Enables the list view feature",
    "Determines if period validation is required",
    "Determines if transaction history deletion is enabled",
    "To initalise root page at the starting of the app",
    "To allow user to see versions logs of apk : date 21/08/2023",
    "Determines if the database is encrypted",
    "Key used for encrypting and decrypting data",
    "Certificate Pining enable when needed",
    "Enables or disables debug logging for API requests",
    "Check Device Rooted or not",
    "Separator for CSV key formatting",
    "Specifies the default language for the app",
    "Controls staying on the current page based on conditions",
    "Based on this, we call getSalesOrdersForPacking(if false) or getSalesOrdersForPicking(if true), in SO PACK Tile",
    "To use front-egg for authenticating, instead of EBS",
    "Key used for encrypting data",
    "Enables security features like encryption",
    "To do 100% serial-validation in SHIP_LPN",
    "This is DeliveryId Level",
    "At DeliveryLineId Level",
    "Controls loading unscheduled items",
    "Controls whether the request ID is copied",
    "Separates the message and request ID",
    "",
  ]

}