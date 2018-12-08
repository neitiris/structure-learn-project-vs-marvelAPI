export const MARVELBUTTONS = [
  {
    href: '/marvel/charters',
    src: './assets/img/marvel/avengers.png',
    text: 'MARVEL HEROES'
  },
  {
    href: '/marvel/comics',
    src: './assets/img/marvel/comics.png',
    text: 'MARVEL COMICS'
  }
];
export const COMICSLIST = [];
export const COMICSFILTER = [
  {
    link: '',
    name: 'Series'
  },
  {
    link: '',
    name: 'Charters'
  },
  {
    link: '',
    name: 'Creators'
  },
  {
    link: '',
    name: 'EVENT'
  }
];
export const CHARTERSFILTER = [];
export const CHARTERSLIST = [];
export const COMICSLISTOPTIONS: any = {
  searchItems: [
    { title: 'First Name', value: 'firstName' },
    { title: 'Last Name', value: 'lastName' },
    { title: 'Email', value: 'email' },
    { title: 'Company Name', value: 'companyName' },
    { title: 'Description', value: 'description' },
    { title: 'Phone Number 1', value: 'phoneNumber1' },
    { title: 'Phone Number 2', value: 'phoneNumber2' },
  ],
  paginationItemsSelector: [ 10, 20, 30 ],
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
export const MENUITEMS: any[] = [
  {ico: 'fas fa-tachometer-alt', header: 'Dashboard', button: ['User List', 'Dashboard2']},
  {ico: 'far fa-copy', header: 'Layout Options', button: ['Top Navigation', 'Boxed', 'Fixed', 'Collapsed Sidebar']},
  {ico: 'fas fa-th', header: 'Widgets', button: ['Widgets']},
  {ico: 'fas fa-chart-pie', header: 'Charts', button: ['ChartsJS', 'Morris', 'Flot', 'Inline Charts']},
  {ico: 'fas fa-laptop', header: 'UI Elements', button: ['General', 'Icons', 'Buttons', 'Sliders', 'Timeline', 'Modals']},
  {ico: 'fas fa-edit', header: 'Forms', button: ['General Elements', 'Advanced Elements', 'Editors']},
  {ico: 'fas fa-th-list', header: 'Tables', button: ['Simple Tables', 'Data Tables']},
  {ico: 'fas fa-calendar-alt', header: 'Calendar', button: ['Calendar']},
  {ico: 'fas fa-envelope', header: 'Mailbox', button: ['Inbox', 'Compose', 'Read']},
  {ico: 'fas fa-folder', header: 'Examples', button: ['Invoice', 'Profile', 'Login', 'Register', 'Lockscreen', '404 Error']},
  {ico: 'fas fa-reply-all', header: 'Multilevel', button: ['Level1', 'Level2', 'Level3']},
  {ico: 'fas fa-tachometer-alt', header: 'Documentation'},
  {ico: 'fas fa-tachometer-alt', header: 'Important'},
  {ico: 'fas fa-tachometer-alt', header: 'Warnings'},
  {ico: 'fas fa-tachometer-alt', header: 'Information'},
  {ico: 'fas fa-tachometer-alt', header: 'Premium Templates'},
];
