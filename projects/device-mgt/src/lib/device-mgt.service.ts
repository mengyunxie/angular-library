import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as environment from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeviceMgtService {
  protected config = environment.environment;
  constructor(protected hc: HttpClient) { }
  public getData(): Observable<any>  {
    const params = new HttpParams()
      .append('username', 'username');
    return this.hc.get(this.config.testURL + this.config.apiUrl.deviceList, {params});
  }
}
