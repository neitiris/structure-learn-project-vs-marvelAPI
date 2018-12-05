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
  protected prefix = 'v1/public/';
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
  public get(path: string): Observable<HttpResponse<any>> {
    return this.http.get(`${this.endpoint}${path}` + this.auth)
      .pipe(map(this.checkForError))
      .pipe(catchError(this.catchErr))
      .pipe(map(this.getJson));
  }
  public getAuthOptions() {
    const publickey = '41f1403bc5b848b992d6f6f8307051ba';
    const privatekey = '9c6ebfa55b42232f944edf599916481061fdc41f';
    const ts = new Date().getTime();
    const hash = Md5.hashStr(ts + privatekey + publickey).toString();
    return ('?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash);
  }
  /**
   * Parse 'string' type response body due to server response type, or return as is if not string
   * Required for getting valid object in other services
   * @param r
   * @returns {any}
   */
  public getJson(r: any) {
    console.log('getJson r', r);
    return r && r._body && r._body.length ? r.json() : r;
  }

  /**
   * Check response status code and provide required action
   * @param resp
   * @returns {HttpResponse<any>}
   */
  public checkForError(resp: any): HttpResponse<any> {
    console.log('checkForError resp', resp);
    if (resp.status >= 500) {
      return resp;
    } else if ((resp.status >= 200 && resp.status < 300) || !resp.status) {
      return resp;
    } else if (resp.status === 401) {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      // throwError(error);
    } else {
      const error = new Error(resp.statusText);
      error['response'] = resp;
      throwError(error);
    }
  }

  /**
   * Catch and throw Error if it occurs in server response
   * @param err
   * @returns {Observable<never>}
   */
  public catchErr(err: any) {
    console.log('catchErr err', err);
    if (err && err._body && typeof err._body === 'string') {
      const errBody: any = JSON.parse(err._body);
      err.message = errBody && errBody.error && errBody.error.message ?
        errBody.error.message : 'Error.';
      return throwError(err);
    } else {
      return err;
    }
  }

}
