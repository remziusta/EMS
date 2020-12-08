import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers/workers.component';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { WorkerAddedComponent } from './workers/worker-added/worker-added.component';
import { WorkerUpdateComponent } from './workers/worker-update/worker-update.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IgxFocusModule, IgxIconModule,IgxButtonModule, IgxInputGroupModule, IgxMaskModule, IgxTextSelectionModule } from 'igniteui-angular';

const routes: Routes = [
  {
    path: "",
    component: WorkerListComponent
  },
  {
    path:"worker-added",
    component: WorkerAddedComponent
  },
  {
    path:"worker-update/:id",
    component:WorkerUpdateComponent
  }
];

@NgModule({
  declarations: [WorkersComponent, WorkerListComponent, WorkerAddedComponent, WorkerUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    IgxIconModule,
    IgxMaskModule,
    IgxInputGroupModule,
    IgxTextSelectionModule,
    IgxFocusModule,
    IgxIconModule,
    IgxButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkerModule { }
