import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvConfigService {
  private configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  saveConfig(config: any): Observable<any> {
    return this.http.post(this.configUrl, config);
  }
}