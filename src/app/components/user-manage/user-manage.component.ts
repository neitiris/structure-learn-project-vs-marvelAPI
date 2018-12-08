import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/userservice';

@Component({
  selector: 'component-manage-user',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  @Input() public userId: any;
  public user: any = {};
  public userUnchanged: any = {};
  public options: any = {
    changed: false,
    isNew: true
  };
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public _user: UserService
  ) { }
  // Calling user details function
  public ngOnInit() {
    console.log('ngOnInit this.route', this.route);
    if (this.userId['id'] && this.userId['id'] !== 'newUser') {
        this.requestUser(this.userId['id']);
    }
  }
  // request User by id from server
  public requestUser(id: any) {
    if (id) {
      this._user.getUserById(id).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          if (resp && resp.data) {
            this.user = this.clone(resp.data);
            this.userUnchanged = this.clone(resp.data);
            this.options.isNew = false;
          }
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
  // route to admin dashboard
  public goBack() {
    this.router.navigate(['admin', 'dashboard']);
  }
  // Delete user data from backend
  public deleteUserData(id) {
    this._user.deleteUser(id).subscribe(
      (resp: any) => {
        this.router.navigate(['admin', 'dashboard']);
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
  // Function try to save changes or create user to backend
  public trySave(user: any) {
    if (user && user.id) {
      const changedUserData: any = this.getChanged(this.userUnchanged, this.user);
      this._user.updateUser(changedUserData, user.id).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          this.router.navigate([ 'admin', 'dashboard']);
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    } else {
      this._user.createNewUser(user).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          this.router.navigate([ 'admin', 'dashboard']);
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
  // Function what create array with differense of unchanged data and changed
  public onChange() {
    this.options.changed = !this.areEqual(this.user, this.userUnchanged);
    const changedObj: any = this.getChanged(this.userUnchanged, this.user);
    console.log('changedObj', changedObj);
  }
  private getChanged(unchanged: any, changed: any) {
    const diff: any = {};
    for (const prop in unchanged) {
      if (prop && prop !== 'authorizedCountry') {
        if (unchanged[prop] !== changed[prop]) {
          diff[prop] = changed[prop];
        }
      }
    }
    return diff;
  }

  private areEqual(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  private clone(sourceObj: any) {
    return JSON.parse(JSON.stringify(sourceObj));
  }
}
