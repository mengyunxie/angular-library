import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceMgtComponent } from './device-mgt.component';
import {  DeviceDetailComponent } from './device-detail/device-detail.component';
import {  DeviceListComponent } from './device-list/device-list.component';
const routes: Routes = [
  { path: '',
    component: DeviceMgtComponent,
    children: [
      {
        path: 'deviceList',
        component: DeviceListComponent
      },
      {
        path: 'deviceDetail',
        component: DeviceDetailComponent
      },
      {
        path: '',
        redirectTo: 'deviceList',
        pathMatch: 'full'
      },
      { path: '**', component: DeviceListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceMgtRoutes {}
