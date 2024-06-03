import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent implements OnInit {
  addProductForm = new FormGroup({
    sku: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required]),
    clothe: new FormControl('', [Validators.required]),
    clothe_type: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    stock: new FormControl(null, [Validators.required, Validators.min(0)]),
    genre: new FormControl('', [Validators.required]),
    host_id: new FormControl<string | null>(null),
  });

  role: number = 0;
  showAlert: boolean = false;
  isSuccess: boolean = false;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  product: any = {};

  ngOnInit(): void {
    this.role = parseInt(sessionStorage.getItem('role') || '0', 10);

    const sku = this.route.snapshot.paramMap.get('sku');
    this.inventoryService.getInventory().subscribe((data: any) => {
      this.product = data.find((product: any) => product.sku === sku);
      if (this.product) {
        this.addProductForm.patchValue(this.product);
      }
    });
  }

  update() {
    if (this.addProductForm.valid) {
      const formValues = this.addProductForm.value;
      const product = {
        sku: formValues.sku,
        name: formValues.name,
        clothe: formValues.clothe,
        clotheType: formValues.clothe_type,
        price: formValues.price,
        stock: formValues.stock,
        genre: formValues.genre,
        hostId: formValues.host_id,
      };

      console.log(product);
      

      this.inventoryService.updateProduct(product).subscribe(
        (response) => {
          console.log('Success ', response);
          this.router.navigate(['/inventory']);
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
