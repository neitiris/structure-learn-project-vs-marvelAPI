import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MarvelComponent } from './marvel.component';
import { routes } from './marvel.routes';
import { RouterModule } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    MarvelComponent,
    ComicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class MarvelModule {
  public static routes = routes;
  constructor() {
    console.log('`Marvel` module initialized');
  }
}
