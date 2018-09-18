import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMgtService {
  private userName: Subject<any>;

  constructor() {
    this.userName = new Subject<any>();
  }

  setVal(user) {
    this.userName.next(user);
    console.log('当前service为:', this.userName);
  }
  getVal(): Observable<any> {
    return this.userName;
  }
}
