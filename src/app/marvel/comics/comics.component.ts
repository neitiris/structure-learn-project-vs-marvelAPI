import { Component, OnInit } from '@angular/core';
import {
  COMICSFILTER,
  COMICSLIST,
  COMICSLISTOPTIONS
} from '../../../shared/mock-data';
import { AuthService } from '../../../services/authservice';
import { ComicsService } from '../../../services/comics-service';

@Component({
  selector: 'comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  public comicsList = COMICSLIST;
  public comicsFilters = COMICSFILTER;
  public comicsListOptions = COMICSLISTOPTIONS;
  public comicsImages = [];
  constructor(
    private authservice: AuthService,
    private cService: ComicsService
  ) {}
  public ngOnInit() {
    this.getComics();
  }
  /**
   * request to backend for users list
   */
  public getComics() {
    // this.comicsListOptions.urlParams = `?limit=${this.comicsListOptions.tableItemsAmount}`;
    // console.log(this.comicsListOptions.urlParams);
    this.cService.getComics(this.comicsListOptions.urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.comicsList = resp.data.results;
        this.comicsListOptions.count = resp.data.count;
        this.takeDetails(this.comicsList);
        // add if HERE!!!
        // this.comicsListOptions.pages = Math.ceil(((+this.comicsListOptions.count) /
        // this.comicsListOptions.tableItemsAmount));
        // console.log('count', this.comicsListOptions.count);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }
  public takeDetails(comicsList: any[]) {
    console.log('comicsList', comicsList);
    for (const comics of comicsList) {
      if (comics.images.length > 0) {
        this.comicsImages.push({
            img: comics.images[0].path + '.' + comics.images[0].extension,
            title: comics.title,
            creators: comics.creators,
            detailURL: comics.detail
          }
        );
      }
    }
    console.log(this.comicsImages);
  }
  public quit() {
    this.authservice.logOutFunk();
  }
}
