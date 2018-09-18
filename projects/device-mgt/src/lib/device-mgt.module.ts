import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DeviceMgtComponent } from './device-mgt.component';
import {  DeviceDetailComponent } from './device-detail/device-detail.component';
import {  DeviceListComponent } from './device-list/device-list.component';
import { DeviceMgtRoutes } from './device-mgt.routing';
@NgModule({
  imports: [
    CommonModule,
    DeviceMgtRoutes,
    NgZorroAntdModule
  ],
  declarations: [
    DeviceMgtComponent,
    DeviceDetailComponent,
    DeviceListComponent
  ],
  exports: [DeviceMgtComponent]
})
export class DeviceMgtModule { }
