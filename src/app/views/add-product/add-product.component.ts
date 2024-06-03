import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  addProductForm = new FormGroup({
    sku: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required]),
    clothe: new FormControl('', [Validators.required]),
    clotheType: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    stock: new FormControl(null, [Validators.required, Validators.min(0)]),
    genre: new FormControl('', [Validators.required]),
  });

  constructor(private inventoryService: InventoryService) {}

  add() {
    if (this.addProductForm.valid) {
      const product = this.addProductForm.value;
      this.inventoryService.addProduct(product).subscribe(
        (response) => {
          console.log('Success ', response);
        },
        (error) => {
          console.error('Error ', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
