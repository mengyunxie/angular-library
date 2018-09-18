import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iot-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  isShow = true;
  constructor() { }

  ngOnInit() {
  }

}
