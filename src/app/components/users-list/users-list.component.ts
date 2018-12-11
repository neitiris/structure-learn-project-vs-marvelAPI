import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  faArrowUp,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() public usersList: any[] = [];
  @Output() public deleteUser: any = new EventEmitter();
  @Output() public editUser: any = new EventEmitter();
  @Output() public requestUsers: any = new EventEmitter();

  public showEdit = false;
  public faArrow = faArrowUp;
  public faEditIcon = faEdit;
  public tableOptions: any = {
    headerItems: [
      { title: 'Id', value: 'id' },
      { title: 'First Name', value: 'firstName' },
      { title: 'Email', value: 'email' },
      { title: 'Company Name', value: 'companyName' },
      { title: 'Created At', value: 'createdAt' },
    ],
    searchItems: [
      { title: 'First Name', value: 'firstName' },
      { title: 'Last Name', value: 'lastName' },
      { title: 'Email', value: 'email' },
      { title: 'Company Name', value: 'companyName' },
      { title: 'Description', value: 'description' },
      { title: 'Phone Number 1', value: 'phoneNumber1' },
      { title: 'Phone Number 2', value: 'phoneNumber2' },
    ],
    paginationItemsSelector: [ 5, 10, 15, 20 ],
    searchValue: '',
    count: '',
    tableItemsAmount: 15,
    pages: 0,
    urlParams: '',
    checkedAll: false,
    activePage: 1,
    searchKey: 'email',
    sortKey: 'id',
    sortDirection: 1 // 1 === Ascent, 2 === Descent
  };
  public user: any = {};
  public options: any = {
    changed: false,
    isNew: true
  };
  constructor() {
    console.log('UsersListComponent started.');
  }

  /**
   * Invoke request users list
   */
  public getUsers() {
    this.tableOptions.urlParams =
      `?page=${this.tableOptions.activePage}&limit=${this.tableOptions.tableItemsAmount}` +
      `&order={"${this.tableOptions.sortKey}":${this.tableOptions.sortDirection}}` +
      `&where={"${this.tableOptions.searchKey}":"${this.tableOptions.searchValue}"}`;
    console.log(this.tableOptions.urlParams);
    this.requestUsers.next(this.tableOptions.urlParams);
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

  /**
   * Invoke editing user
   * @param id
   */
  public openEdit(id: any) {
    this.editUser.next(id);
    this.showEdit = true;
  }
}
