import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

interface Product {
  sku: string;
  name: string;
  clothe: string;
  clothe_type: string;
  price: number;
  stock: number;
  genre: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  products: Product[] = [];
  menuHidden = true;
  showForm = false;
  isEdit = false;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.inventoryService.getInventory().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(sku: string) {
    this.inventoryService.deleteProduct(sku).subscribe(
      (response) => {
        console.log('Success', response);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
