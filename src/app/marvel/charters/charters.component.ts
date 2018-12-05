import { Component } from '@angular/core';
import {
  CHARTERSFILTER,
  CHARTERSLIST
} from '../../../shared/mock-data';
@Component({
  selector: 'charters',
  templateUrl: './charters.component.html',
  styleUrls: ['./charters.component.css']
})
export class ChartersComponent {
  public charterssList = CHARTERSLIST;
  public chartersFilters = CHARTERSFILTER;
}
