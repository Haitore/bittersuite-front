import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Router } from '@angular/router';

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

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }

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
