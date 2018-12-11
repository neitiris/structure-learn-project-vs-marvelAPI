import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserEditComponent } from './useredit/';
import { UserManageComponent, UsersListComponent } from '../components/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    AdminComponent,
    UserEditComponent,
    UsersListComponent,
    UserManageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  providers: [
    UserManageComponent
  ]
})
export class AdminModule {
  public static routes = routes;
  constructor() {
    console.log('`Admin` module initialized');
  }
}
