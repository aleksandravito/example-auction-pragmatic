import { Auction } from './auction';

export const AUCTIONS: Auction[] = [
  {
    id: 1,
    seller: 'alex',
    prod_name: 'painting of leo da vinci',
    prod_desc: 'descr of painting of leo da vinci',
    prod_start: 10,
    prod_highest: 10,
    prod_date: '2021-07-09',
    prod_buyer: 'alex'
  },
  {
    id: 2,
    seller: 'alex',
    prod_name: 'painting: woman with pearls',
    prod_desc: 'descr of painting woman with pearls',
    prod_start: 20,
    prod_highest: 45,
    prod_date: '2021-08-02',
    prod_buyer: 'miakoda'
  },
  {
    id: 3,
    seller: 'miakoda',
    prod_name: 'painting: la revolution',
    prod_desc: 'descr of painting la revolution',
    prod_start: 100,
    prod_highest: 145,
    prod_date: '2021-07-12',
    prod_buyer: 'alexa'
  }
];
