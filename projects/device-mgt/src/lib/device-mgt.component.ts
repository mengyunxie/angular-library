import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'iot-device-mgt',
  templateUrl: './device-mgt.component.html',
  styleUrls: ['./device-mgt.component.css']
})
export class DeviceMgtComponent implements OnInit {
  public id;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.activatedRoute);
  }

}
