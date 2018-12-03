import { Component } from '@angular/core';
import { COMICSLIST } from '../../../shared/mock-data';
import { AuthService } from '../../../services/authservice';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  public comicsList = COMICSLIST;
  constructor(
    private authservice: AuthService,
  ) {}
  public quit() {
    this.authservice.logOutFunk();
  }
}
