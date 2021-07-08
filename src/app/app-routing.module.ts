import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionComponent } from './auction/auction.component';
import { NewAuctionComponent } from './new-auction/new-auction.component';

const accountModule = () =>
  import('./account/account.module').then(x => x.AccountModule);
const usersModule = () =>
  import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  { path: 'auctions-list', component: AuctionListComponent },
  { path: 'auction/:id', component: AuctionComponent },
  { path: 'new-auction', component: NewAuctionComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
