import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from '../marvel-api';

@Injectable()
export class ComicsService {

  protected path = '/comics';

  constructor(
    public api: MarvelApiService
  ) {}

  /**
   * Get list of comics
   * @returns {Observable<any>}
   */
  public getComics(params?: string): Observable<any> {
    return this.api.get(`${this.path}${params || ''}`);
  }
  public getComicsById(id: number | string): Observable<any> {
    return this.api.get(`${this.path}/${id}`);
  }
}
