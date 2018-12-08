import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/';
import { Router } from '@angular/router';
import {
  MENUITEMS
} from '../../shared/mock-data';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public menuItems = MENUITEMS;
  constructor(
    public authservice: AuthService,
    public router: Router
  ) { }

  public ngOnInit() {
    this.populateMenu();
  }
  /**
   * Change menu 'opened' property value on menu item click
   * And close any other opened menu item
   * @param item
   */
  public menuClicked(item: any) {
    // If menu items exist, we continue our logic
    if (this.menuItems.length) {
      // Iterate through menu items
      // Compare clicked menu item 'id' and change it's 'opened' property to reverse boolean value
      // All other menu items 'opened' set to false. Closing any menu item opened.
      this.menuItems.forEach(
        (m: any) => item.id === m.id ?
          m.opened = !m.opened :  m.opened = false
      );
    }
  }

  /**
   * List child element action
   * @param childItem
   */
  public menuChildClicked(childItem: any) {
    console.log(
      'menuChildClicked childItem', childItem,
      ' clicked. Do any action you need here. For example redirect.'
    );
  }
  public quit() {
    this.authservice.logOutFunk();
    console.log('Log out sucsess');
    this.router.navigate([ '', 'land']);
  }
  /**
   * Populating menu items with child elements
   * Each has own id to identify in 'open/close' js logic
   */
  private populateMenu() {
    if (this.menuItems.length) {
      const allItems: any[] = [];
      for (let m = 0; m < this.menuItems.length; m++) {
        console.log();
        const item: any = {
          id: m,
          opened: false,
          title: this.menuItems[m].header,
          innerItems: [],
          icon: this.menuItems[m].ico
        };
        if (this.menuItems[m] && this.menuItems[m].button) {
          for (let c = 0; c < this.menuItems[m].button.length; c++) {
            item.innerItems.push({
              id: 1000 * m + c,
              title: this.menuItems[m].button[c]
            });
          }
          allItems.push(item);
        }
      }
      this.menuItems = allItems;
    }
  }
}
