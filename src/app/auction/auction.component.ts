import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionStorageService } from '../auction-storage.service';
import { Auction } from '../auction';
// import { AuctionListComponent } from '../auction-list/auction-list.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FunksioneAuction } from '../utils/functions';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent extends FunksioneAuction implements OnInit {
  // @Input() dataprod: AuctionListComponent | undefined;
  auctionForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private storage: AuctionStorageService
  ) {
    super();
  }

  get bid() {
    return this.auctionForm.get('bid')!;
  }

  ngOnInit(): void {
    const higherBid = this.getAuction()[0].prod_highest + 1;
    this.auctionForm = new FormGroup({
      bid: new FormControl('', [Validators.required, Validators.min(higherBid)])
    });
  }

  getAuction(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const auction: any = this.storage.auctionList.filter(
      (x: { id: number }) => x.id === id
    );
    return auction;
  }
}
