import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserMgtService } from 'user-mgt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;

  public userName = 'string';

  constructor(
    private UserName: UserMgtService
  ) {
  }

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {
    this.UserName.getVal().subscribe((user) => {
      this.userName = user;
    });

  }
}
