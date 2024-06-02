import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../services/stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {
  stores: any[] = [];

  constructor(private storesService: StoresService, private router: Router) {}

  ngOnInit(): void {
    const role = parseInt(sessionStorage.getItem('role') || '0', 10);

    if (role !== 1) {
      this.router.navigateByUrl('/');
    } else {
      this.storesService.getStores().subscribe((data: any[]) => {
        this.stores = data;
      });
    }
  }
}
