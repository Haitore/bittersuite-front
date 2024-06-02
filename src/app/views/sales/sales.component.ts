import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

  salesData = [
    {
      date: '18/05/2022',
      sku: 'd100',
      name: 'product1',
      quantity: 10,
      total_price: 1000
    },
    {
      date: '18/05/2022',
      sku: 'd100',
      name: 'product2',
      quantity: 10,
      total_price: 1000
    },
    {
      date: '18/05/2022',
      sku: 'd100',
      name: 'product3',
      quantity: 10,
      total_price: 1000
    },
    {
      date: '18/05/2022',
      sku: 'd100',
      name: 'product4',
      quantity: 10,
      total_price: 1000
    },
    {
      date: '18/05/2022',
      sku: 'd100',
      name: 'product5',
      quantity: 10,
      total_price: 1000
    },
  ]

}
