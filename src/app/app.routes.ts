import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'login', loadChildren: './login-page#LoginPageModule' },
  { path: 'admin', loadChildren: './admin#AdminModule'},
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: 'marvel', loadChildren: './marvel#MarvelModule'},
  { path: '**',    component: NoContentComponent },
];
