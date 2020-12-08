import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddedComponent } from './department/department-added/department-added.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';
import { RouterModule, Routes } from '@angular/router';
import { IgxButtonModule, IgxFocusModule, IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxTextSelectionModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: DepartmentListComponent
  },
  {
    path: "department-added",
    component: DepartmentAddedComponent
  },
  {
    path: "department-update/:id",
    component: DepartmentUpdateComponent
  }
]

@NgModule({
  declarations: [DepartmentComponent, DepartmentListComponent, DepartmentAddedComponent, DepartmentUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    IgxIconModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxTextSelectionModule,
    IgxFocusModule,
    IgxButtonModule,
    
  ]
})
export class DepartmentModule { }
