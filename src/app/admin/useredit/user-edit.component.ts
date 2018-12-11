import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public editUserData: any;
  public tableOptions: any = {
    count: '',
    tableItemsAmount: 15,
    activePage: 1,
    searchKey: 'email',
    sortKey: 'id',
    sortDirection: 1 // 1 === Ascent, 2 === Descent
  };
  public usersList: any[] = [];
  public options: any = {
    changed: false,
    isNew: true
  };
  constructor(
    public _user: UserService,
    public router: Router
  ) { }

  public ngOnInit() {
    this.getUsers();
  }

  /**
   * request to backend for users list
   */
  public getUsers(urlParams?: string) {
    this.tableOptions.urlParams =
      `?page=${this.tableOptions.activePage}&limit=${this.tableOptions.tableItemsAmount}` +
      `&order={"${this.tableOptions.sortKey}":${this.tableOptions.sortDirection}}` +
      `&where={"${this.tableOptions.searchKey}":"${this.tableOptions.searchValue}"}`;
    console.log(this.tableOptions.urlParams, urlParams);
    this._user.getUsers(urlParams || this.tableOptions.urlParams).subscribe(
      (resp: any) => {
        console.log('getUsers resp', resp);
        this.usersList = resp.rows;
        this.tableOptions.count = resp.count;
        this.tableOptions.pages =
          Math.ceil(((+this.tableOptions.count) / this.tableOptions.tableItemsAmount));
        console.log('this.usersList', this.usersList);
        console.log('count', this.tableOptions.count);
      },
      (err: any) => {
        console.log('err', err);
      },
    );
  }

  /**
   * Checkbox handler function
   * check one or all items in usersList
   * @param item
   */
  public check(item?: any) {
    // Provide check of defined list item if it exist
    if (item) {
      // Iterate in usersList and check/uncheck only item with same id
      this.usersList = this.usersList.map((u: any) => {
        if (u.id === item.id) {
          u.checked = !u.checked;
          // Uncheck general checkbox as it can't be
          // checked if any of 'checked' differs from rest of items
          this.tableOptions.checkedAll = false;
        }
        return u;
      });
    } else {
      // Check/Uncheck all items if no defined item to check
      this.tableOptions.checkedAll = !this.tableOptions.checkedAll;
      this.usersList = this.usersList.map((u: any) => {
        u.checked = this.tableOptions.checkedAll;
        return u;
      });
    }
  }

  /**
   * Pagination of table
   * @param {number | string} go
   */
  public paginate(go: number | string) {
    if (go === 1 && this.tableOptions.activePage < this.tableOptions.pages) {
      this.tableOptions.activePage++;
      this.getUsers();
    } else if (go === -1 && this.tableOptions.activePage > 1) {
      this.tableOptions.activePage--;
      this.getUsers();
    } else if (go === 'first' && this.tableOptions.activePage > 1) {
      this.tableOptions.activePage = 1;
      this.getUsers();
    } else if (go === 'last' && this.tableOptions.activePage < this.tableOptions.pages) {
      this.tableOptions.activePage = this.tableOptions.pages;
      this.getUsers();
    }
  }

  /**
   * Select count of showed users
   * @param {number} count
   */
  public chooseShowed(count: number) {
    if (count > 1) {
      this.tableOptions.tableItemsAmount = count;
      this.tableOptions.activePage = 1;
      this.getUsers();
      console.log('this.tableItemsAmount', this.tableOptions.tableItemsAmount);
    }
  }

  /**
   * Select type of search tag
   * @param {string} tag
   */
  public searchUserTag(tag: string) {
    this.tableOptions.searchKey = tag;
    this.getUsers();
  }

  /**
   * Search user by provided string value
   * @param {string} value
   */
  public searchUserBy(value: string) {
    // Debounce logic for reducing API load
    const newValue: string = value;
    setTimeout(() => {
      const prevValue: string = value;
      console.log('prevValue, newValue', prevValue, newValue);
      if (prevValue === newValue) {
        this.tableOptions.searchValue = value;
        this.getUsers();
      }
    }, 350);
  }

  /**
   * Sort table by key
   * @param {string} key
   */
  public sortTable(key: string) {
    console.log('key', key);
    this.tableOptions.sortDirection =
      key === this.tableOptions.sortKey ?
        this.tableOptions.sortDirection * -1 : this.tableOptions.sortDirection;
    this.tableOptions.sortKey = key;
    this.getUsers();
  }
  // request User by id from server
  public requestUser(id: number) {
    if (id) {
      this._user.getUserById(id).subscribe(
        (resp: any) => {
          console.log('resp', resp);
          if (resp && resp.data) {
            this.editUserData = this.clone(resp.data);
            this.options.isNew = false;
          }
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
  // Delete user data from backend
  public deleteUserData(id) {
    this._user.deleteUser(id).subscribe(
      (resp: any) => {
        console.log('deleted');
      },
      (err: any) => {
        console.log('err', err);
      }
    );
  }
  // Function try to save changes or create user to backend
  public trySave(user: any) {
    if (user && user.id) {
      this._user.updateUser(user, user.id).subscribe(
        (resp: any) => {
          console.log('resp', resp);
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    } else {
      this._user.createNewUser(user).subscribe(
        (resp: any) => {
          console.log('resp', resp);
        },
        (err: any) => {
          console.log('err', err);
        }
      );
    }
  }
  private clone(sourceObj: any) {
    return JSON.parse(JSON.stringify(sourceObj));
  }
}
