import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { routes } from './login-page.routes';
import { RouterModule } from '@angular/router';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [ LoginPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginPageModule {
  public static routes = routes;
  constructor() {
    console.log('`Login` module initialized');
  }
}
