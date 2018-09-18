import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserMgtComponent } from './user-mgt.component';
import { UserMgtRoutes } from './user-mgt.routing';

@NgModule({
  imports: [
    UserMgtRoutes,
    FormsModule
  ],
  declarations: [UserMgtComponent],
  exports: [UserMgtComponent]
})
export class UserMgtModule { }
