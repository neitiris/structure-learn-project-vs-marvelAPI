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
