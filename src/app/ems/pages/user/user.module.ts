import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: ":id",
    component: UserComponent,
    children:[
      {
        path:"detail",
        component: UserDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
