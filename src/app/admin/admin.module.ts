import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserlistComponent } from '../components/';
import { UserEditComponent } from './useredit/';
import { UserManageComponent } from '../components/';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    UserEditComponent,
    UserlistComponent,
    UserManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserlistComponent,
    UserManageComponent
  ]
})
export class AdminModule {
  public static routes = routes;
  constructor() {
    console.log('`Admin` module initialized');
  }
}
