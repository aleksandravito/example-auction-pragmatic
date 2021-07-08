import { Component, OnInit } from '@angular/core';
import { AuctionStorageService } from '../auction-storage.service';
import { Auction } from '../auction';
// @ts-ignore
import { FunksioneAuction } from '../utils/functions';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent extends FunksioneAuction implements OnInit {
  auctionlist!: any;
  constructor(public storage: AuctionStorageService) {
    super();
  }

  ngOnInit(): void {
    this.auctionlist = this.storage.auctionList;
    // console.log('auction list', this.auctionlist[0].prod_name);
  }

  // calculateDiff(dateSent: Date) {
  //   const currentDate = new Date();
  //   dateSent = new Date(dateSent);
  //   // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //   return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) ) / (1000 * 60 * 60 * 24));
  // }

  deleteAuction(auction: Auction): void {
    const lista = this.auctionlist;
    const indexOfAuction = this.storage.findItemIndex(auction);
    lista.splice(indexOfAuction, 1);
    localStorage.clear();
    localStorage.setItem('auction_list', JSON.stringify(lista));
  }
}
