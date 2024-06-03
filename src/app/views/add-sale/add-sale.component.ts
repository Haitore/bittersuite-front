import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { SalesService } from '../../services/sales.service';
import { Router } from '@angular/router';

interface Product {
  sku: string;
  name: string;
  price: number;
  host_id: string;
}

interface Sale {
  sku: string | undefined;
  name: string | undefined;
  quantity: number | null;
  dateSale: Date | null;
  totalPrice: number;
  hostId?: string | null;
}

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
})
export class AddSaleComponent implements OnInit {
  addSaleForm = new FormGroup({
    product: new FormControl<Product>({} as Product, Validators.required),
    quantity: new FormControl<number | null>(0, [
      Validators.required,
      Validators.min(1),
    ]),
    dateSale: new FormControl<Date | null>(null, Validators.required),
    hostId: new FormControl<string | null>(null),
  });

  productList: Product[] = [];
  uniqueHostIds: string[] = [];
  product: Product = {} as Product;
  quantity: number = 0;
  role: number = 0;
  showAlert: boolean = false;
  isSuccess: boolean = false;

  constructor(
    private inventoryService: InventoryService,
    private salesService: SalesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }

    this.role = parseInt(sessionStorage.getItem('role') || '0', 10);

    this.inventoryService.getInventory().subscribe((data: Product[]) => {
      this.productList = data;

      const hostIdsSet = new Set<string>();
      data.forEach((product: Product) => {
        hostIdsSet.add(product.host_id);
      });
      this.uniqueHostIds = Array.from(hostIdsSet);
    });
  }

  add() {
    const { product, quantity, dateSale, hostId } =
      this.addSaleForm.getRawValue();

    const sale: Sale = {
      sku: product?.sku,
      name: product?.name,
      quantity,
      dateSale,
      totalPrice: (product?.price || 0) * (quantity || 0),
    };

    if (this.role == 1) {
      sale.hostId = hostId;
    }

    console.log(sale);

    this.salesService.addSale(sale).subscribe(
      (response) => {
        console.log('Success ', response);
        this.showAlert = true;
        this.isSuccess = true;
      },
      (error) => {
        console.error('Error ', error);
        this.showAlert = true;
        this.isSuccess = false;
      }
    );
    this.addSaleForm.reset(this.addSaleForm.value);
  }
}
