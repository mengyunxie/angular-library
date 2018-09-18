import { UserMgtService } from './user-mgt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iot-user-mgt',
  templateUrl: './user-mgt.component.html',
  styles: []
})
export class UserMgtComponent implements OnInit {
  public date: string;

  constructor(
    private userName: UserMgtService,
  ) { }

  ngOnInit() {
    this.date = 'defind';
  }

  changeUserName() {
    this.userName.setVal(this.date);
  }

}
