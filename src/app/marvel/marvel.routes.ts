import { MarvelComponent } from './marvel.component';
import { ComicsComponent } from './comics/comics.component';
import { ChartersComponent } from './charters/charters.component';

export const routes = [
  { path: '', component: MarvelComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'charters', component: ChartersComponent },
];
