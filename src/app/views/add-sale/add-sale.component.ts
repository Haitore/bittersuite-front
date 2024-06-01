import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl  } from '@angular/forms';

interface Product {
  sku: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrl: './add-sale.component.css'
})
export class AddSaleComponent {
  addSaleForm = new FormGroup({
    product: new FormControl<Product>({} as Product, Validators.required),
    quantity: new FormControl<number | null>(0,  [Validators.required, Validators.min(1) ]),
    date: new FormControl<Date | null>(null, Validators.required),
  })

  productList: Product[] = [
    {
      sku: 'p1',
      name: 'product1',
      price: 10
    },
    {
      sku: 'p2',
      name: 'product2',
      price: 20
    },
    {
      sku: 'p3',
      name: 'product3',
      price: 30
    },
  ]
  product: Product = {} as Product;
  quantity: number = 0;


  add() {
    const { product, quantity, date } = this.addSaleForm.getRawValue();

    const sale = {
      sku: product?.sku,
      name: product?.name,
      quantity,
      date,
      total: (product?.price || 0) * (quantity || 0),
    }

    console.log(sale);
    this.addSaleForm.reset(this.addSaleForm.value);
  }
}
