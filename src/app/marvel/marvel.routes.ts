import { MarvelComponent } from './marvel.component';
import { ComicsComponent } from './comics/comics.component';

export const routes = [
  { path: '', component: MarvelComponent },
  { path: 'comics', component: ComicsComponent },
];
