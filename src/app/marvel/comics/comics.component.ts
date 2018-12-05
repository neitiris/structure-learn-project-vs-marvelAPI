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
  public comicsService = ComicsService;
  public comicsListOptions = COMICSLISTOPTIONS;
  public takeList = this.comicsService.getComics();
  constructor(
    private authservice: AuthService,
  ) {}
  public ngOnInit() {
    this.getUsers();
  }
  /**
   * request to backend for users list
   */
  public getUsers() {
    this.comicsListOptions.urlParams = `?page=${this.comicsListOptions.activePage}&limit=${this.comicsListOptions.tableItemsAmount}` +
      `&order={"${this.comicsListOptions.sortKey}":${this.comicsListOptions.sortDirection}}` +
      `&where={"${this.comicsListOptions.searchKey}":"${this.comicsListOptions.searchValue}"}`;
    console.log(this.comicsListOptions.urlParams);
    this.comicsService.getComics(this.comicsListOptions.urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.comicsService = resp.rows;
        this.comicsListOptions.count = resp.count;
        this.comicsListOptions.pages =  Math.ceil(((+this.comicsListOptions.count) / this.comicsListOptions.tableItemsAmount));
        console.log('count', this.comicsListOptions.count);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }
  public quit() {
    this.authservice.logOutFunk();
  }
}
