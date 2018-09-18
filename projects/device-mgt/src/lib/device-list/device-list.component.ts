import { Component, OnInit } from '@angular/core';
import { DeviceMgtService } from '../device-mgt.service';
@Component({
  selector: 'iot-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  public dataList;
  constructor(public deviceMgtService: DeviceMgtService) { }

  ngOnInit() {
    this.deviceMgtService.getData().subscribe(data => {
      this.dataList = data.list;
      });
  }

}
