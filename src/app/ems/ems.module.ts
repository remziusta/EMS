import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IgxNavbarModule,IgxRippleModule,IgxToggleModule,IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule} from 'igniteui-angular';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
const routes: Routes = [
    {
      path: "",
      loadChildren: () =>import('../ems/pages/pages.module').then(m => m.PagesModule)
    }
];

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    PagesModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    RouterModule.forChild(routes)
  ],
  exports: [NavbarComponent,SidebarComponent]
})
export class EmsModule {


  public ngOnInit() {  }

}
