import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IgxNavbarModule,IgxRippleModule,IgxToggleModule,IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule} from 'igniteui-angular';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule
  ],
  exports: [NavbarComponent,SidebarComponent]
})
export class EmsModule {


  public ngOnInit() {  }

}
