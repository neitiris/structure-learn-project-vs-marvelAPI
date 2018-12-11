import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-manage-user',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  @Input() public user: any = {};
  @Output() public saveUser = new EventEmitter<any>();
  @Output() public closeUserComponent = new EventEmitter<any>();

  public userUnchanged: any = {};
  public options: any = {
    changed: false,
    isNew: true
  };
  constructor(
    public router: Router,
  ) { }
  // Calling user details function
  public ngOnInit() {
    /**
     * Keep original user object to compare
     */
    this.userUnchanged = JSON.parse(JSON.stringify(this.user));
  }
  // Closer this component
  public hideBtn() {
    this.closeUserComponent.next();
  }
  public onSave() {
    const changedData: any = this.getChanged(this.userUnchanged, this.user);
    this.saveUser.emit(changedData);

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

}
