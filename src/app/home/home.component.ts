import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import {
  faPlus,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public faPlusIcon = faPlus;
  public faLabelIcon = faTag;
  public faFacebookIcon = faFacebookF;
  public faTwitterIcon = faTwitter;
  public faInstagrammIcon = faInstagram;
  public navItems = [
    {
      link: './',
      text: 'Index'
    },
    {
      link: './home',
      text: 'Home'
    },
    {
      link: './detail',
      text: 'Detail'
    },
    {
      link: './about',
      text: 'About'
    },
    {
      link: '/admin',
      text: 'Admin'
    },
  ];
  public resentItems = [
    {
      img: './assets/img/img_list.png',
      descr: 'lorem ispum dolor sit amet, consectetur adipocomg elit ser do eodsasr refmre'
    },
    {
      img: './assets/img/img_list.png',
      descr: 'lorem ispum dolor sit amet, consectetur adipocomg elit ser do eodsasr refmre'
    },
    {
      img: './assets/img/img_list.png',
      descr: 'lorem ispum dolor sit amet, consectetur adipocomg elit ser do eodsasr refmre'
    },
    {
      img: './assets/img/img_list.png',
      descr: 'lorem ispum dolor sit amet, consectetur adipocomg elit ser do eodsasr refmre'
    },
  ];
  public blogTexts = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur.',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur.',
      text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
        'cillum dolore eu fugiat nulla pariatur.'
    }
  ];
  public newsArticles = [
    {
      img: './assets/img/article_img.png',
      title: 'A Starter Guide To Self Improvement',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: 'Bess Parr',
      href: ''
    },
    {
      img: './assets/img/article_img.png',
      title: 'A Starter Guide To Self Improvement',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: 'Bess Parr',
      href: ''
    },
    {
      img: './assets/img/article_img.png',
      title: 'A Starter Guide To Self Improvement',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: 'Bess Parr',
      href: ''
    },
    {
      img: './assets/img/article_img.png',
      title: 'A Starter Guide To Self Improvement',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      author: 'Bess Parr',
      href: ''
    }
  ];
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

}
