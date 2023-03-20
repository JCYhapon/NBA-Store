export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'NBA Jerseys',
    price: 79,
    description:
      'Mens Los Angeles Lakers LeBron James Fanatics Branded White 2018/19 Fast Break Replica Jersey - Association Edition',
  },
  {
    id: 2,
    name: 'NBA Hoodies',
    price: 39,
    description:
      'Mens Golden State Warriors Fanatics Branded Royal/Gold Team Leader Iconic Colorblock Anorak Raglan Quarter-Zip Hoodie',
  },
  {
    id: 3,
    name: 'NBA Player Collections Set',
    price: 3999,
    description:
      'Boston Celtics Jayson Tatum NBA x Hasbro Starting Lineup Series 1 Action Figure',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
