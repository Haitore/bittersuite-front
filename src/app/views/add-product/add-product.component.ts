import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { StoresService } from '../../services/stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm = new FormGroup({
    sku: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required]),
    clothe: new FormControl('', [Validators.required]),
    clotheType: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    stock: new FormControl(null, [Validators.required, Validators.min(0)]),
    genre: new FormControl('', [Validators.required]),
    hostId: new FormControl<string | null>(null),
  });

  role: number = 0;
  stores: any[] = [];
  showAlert: boolean = false;
  isSuccess: boolean = false;

  constructor(
    private inventoryService: InventoryService,
    private storeService: StoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }

    this.role = parseInt(sessionStorage.getItem('role') || '0', 10);

    if (this.role === 1) {
      this.storeService.getStores().subscribe((data: any) => {
        this.stores = data;
      });
    }
  }

  add() {
    if (this.addProductForm.valid) {
      const formValues = this.addProductForm.value;
      const product = {
        sku: formValues.sku,
        name: formValues.name,
        clothe: formValues.clothe,
        clotheType: formValues.clotheType,
        price: formValues.price,
        stock: formValues.stock,
        genre: formValues.genre,
        hostId: formValues.hostId,
      };

      this.inventoryService.addProduct(product).subscribe(
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
    } else {
      console.log('Formulario no válido');
    }
  }
}
