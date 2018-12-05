import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class MarvelApiService implements OnInit {

  public headers: HttpHeaders = new HttpHeaders({});

  // API endpoint url and details. Should be adjusted for new projects.
  protected apiUrl = 'http://gateway.marvel.com/';
  protected prefix = 'v1/public';
  protected auth = this.getAuthOptions();
  protected endpoint: string = this.apiUrl + this.prefix;

  constructor(
    public http: HttpClient
  ) { }
  /**
   * Invoke logic on service initiation
   */
  public ngOnInit() {
    // Set initial headers required by server side
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-type': 'application/json'
    });
  }

  /**
   * GET request middleware for other services
   * @param {string} path
   * @returns {Observable<any>}
   */
  public get(path: string): Observable<any> {
    return this.http.get(`${this.endpoint}${path}` + this.auth);
  }
  public getAuthOptions() {
    const publickey = '41f1403bc5b848b992d6f6f8307051ba';
    const privatekey = '9c6ebfa55b42232f944edf599916481061fdc41f';
    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts + privatekey + publickey).toString();
    return ('?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash);
  }
}
