import {
  faCalendarAlt,
  faChartPie,
  faCopy,
  faEdit,
  faEnvelope, faFolder,
  faLaptop,
  faTachometerAlt,
  faTh,
  faThList
} from '@fortawesome/free-solid-svg-icons';

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
  {
    ico: faTachometerAlt,
    header: 'Dashboard',
    button: [
      {
        title: 'User List',
        href: './userlist'
      },
      {
        title: 'Dashboard2',
        href: ''
      }
    ]
  },
  {
    ico: faCopy,
    header: 'Layout Options',
    button: [
      {
        title: 'Top Navigation',
        href: ''
      },
      {
        title: 'Boxed',
        href: ''
      },
      {
        title: 'Fixed',
        href: ''
      },
      {
        title: 'Collapsed Sidebar',
        href: ''
      }
    ]
  },
  {
    ico: faTh,
    header: 'Widgets',
    button: [
      {
        title: 'Widgets',
        href: ''
      }
    ]
  },
  {
    ico: faChartPie,
    header: 'Charts',
    button: [
      {
        title: 'ChartsJS',
        href: ''
      },
      {
        title: 'Morris',
        href: ''
      },
      {
        title: 'Flot',
        href: ''
      },
      {
        title: 'Inline Charts',
        href: ''
      },
    ]
  },
  {
    ico: faLaptop,
    header: 'UI Elements',
    button: [
      {
        title: 'General',
        href: ''
      },
      {
        title: 'Icons',
        href: ''
      },
      {
        title: 'Buttons',
        href: ''
      },
      {
        title: 'Sliders',
        href: ''
      },
      {
        title: 'Timeline',
        href: ''
      },
      {
        title: 'Modals',
        href: ''
      },
    ]
  },
  {
    ico: faEdit,
    header: 'Forms',
    button: [
      {
        title: 'General Elements',
        href: ''
      },
      {
        title: 'Advanced Elements',
        href: ''
      },
      {
        title: 'Editors',
        href: ''
      }
    ]
  },
  {
    ico: faThList,
    header: 'Tables',
    button: [
      {
        title: 'Simple Tables',
        href: ''
      },
      {
        title: 'Data Tables',
        href: ''
      }
    ]
  },
  {
    ico: faCalendarAlt,
    header: 'Calendar',
    button: [
      {
        title: 'Calendar',
        href: ''
      }
    ]
  },
  {
    ico: faEnvelope,
    header: 'Mailbox',
    button: [
      {
        title: 'Inbox',
        href: ''
      },
      {
        title: 'Compose',
        href: ''
      },
      {
        title: 'Read',
        href: ''
      }
    ]
  },
  {
    ico: faFolder,
    header: 'Examples',
    button: [
      {
        title: 'Invoice',
        href: ''
      },
      {
        title: 'Login',
        href: ''
      },
      {
        title: 'Register',
        href: ''
      },
      {
        title: 'Lockscreen',
        href: ''
      },
      {
        title: '404 Error',
        href: ''
      },
      {
        title: 'Profile',
        href: ''
      }
    ]
  },
  {
    ico: faTachometerAlt,
    header: 'Documentation',
    href: './'
  },
  {
    ico: faTachometerAlt,
    header: 'Important',
    href: './'
  },
  {
    ico: faTachometerAlt,
    header: 'Warnings',
    href: './'
  },
  {
    ico: faTachometerAlt,
    header: 'Information',
    href: './'
  },
  {
    ico: faTachometerAlt,
    header: 'Home',
    href: '/home'
  },
];
