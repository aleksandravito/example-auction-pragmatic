import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuctionStorageService } from '../auction-storage.service';
import { AUCTIONS } from '../auctions';
import { Auction } from '../auction';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-auction',
  templateUrl: './new-auction.component.html',
  styleUrls: ['./new-auction.component.css']
})
export class NewAuctionComponent implements OnInit {
  currentDate = new Date();
  latest_date = '2021-07-08';
  heroForm!: FormGroup;
  auction!: object;

  constructor(private storage: AuctionStorageService) {
    // this.oldItems = JSON.parse(this.storage)!;
  }

  get name() {
    return this.heroForm.get('name')!;
  }

  get description() {
    return this.heroForm.get('description')!;
  }

  get price() {
    return this.heroForm.get('price')!;
  }

  get enddate() {
    return this.heroForm.get('enddate')!;
  }

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(11)
      ]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      enddate: new FormControl('', [Validators.required])
    });
  }

  public save(heroForm: FormGroup): void {
    let newItem!: Auction[];
    // newItem = AUCTIONS;
    newItem = this.storage.auctionList;
    // localStorage.clear();

    const addItem: Auction = {
      id: newItem[newItem.length - 1].id + 1,
      seller: 'alex',
      prod_name: heroForm.value.name,
      prod_desc: heroForm.value.description,
      prod_start: heroForm.value.price,
      prod_highest: heroForm.value.price,
      prod_date: heroForm.value.enddate,
      prod_buyer: ''
    };

    newItem.push(addItem);

    console.log('tipi -> ', heroForm.value.name);
    localStorage.setItem('auction_list', JSON.stringify(newItem));

    heroForm.reset();
  }
}
