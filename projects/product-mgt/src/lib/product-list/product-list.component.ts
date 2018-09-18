import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'iot-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  dataSet = [
    {
      key    : '12',
      name   : 'Brown',
      age    : 12,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '22',
      name   : 'Jim',
      age    : 22,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '32',
      name   : 'Joe',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
  }
  goRouter() {
    // device/deviceDetail
    this.router.navigate(['../../../device/123/deviceDetail'], { relativeTo: this.activatedRoute });
  }
}
