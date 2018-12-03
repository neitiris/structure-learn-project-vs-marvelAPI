import { Component } from '@angular/core';
import { MARVELBUTTONS } from '../../shared/mock-data';
import { AuthService } from '../../services/authservice';

@Component({
  selector: 'marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent {
  public marvelButtons = MARVELBUTTONS;
  constructor(
    private authservice: AuthService,
  ) {}
  public quit() {
    this.authservice.logOutFunk();
  }
}
