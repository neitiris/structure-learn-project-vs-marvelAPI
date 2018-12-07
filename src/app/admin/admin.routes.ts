import { AdminComponent } from './admin.component';
import { UserEditComponent } from './useredit';

export const routes = [
  { path: '', component: AdminComponent },
  { path: '', component: AdminComponent,
    children: [
      // {path: 'dashboard', component:  },
      {path: 'userlist', component: UserEditComponent },
      // {path: 'manageuser/:id', component: \ },
    ],
    // canActivate: [ AuthGuardService ]
  },
];
