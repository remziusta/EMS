import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserAddedComponent } from './user/user-added/user-added.component';
import { FormsModule } from '@angular/forms';
import { IgxButtonModule, IgxFocusModule, IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxTextSelectionModule } from 'igniteui-angular';
import { UserUpdateComponent } from './user/user-update/user-update.component';


const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path:"user-added",
    component: UserAddedComponent
  },
  {
    path:"user-update/:id",
    component:UserUpdateComponent
  }
];

@NgModule({
  declarations: [UserComponent,UserListComponent, UserAddedComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    IgxIconModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxTextSelectionModule,
    IgxFocusModule,
    IgxButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
