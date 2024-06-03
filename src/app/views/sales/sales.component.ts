import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent implements OnInit {
  sales: any[] = [];

  constructor(private salesService: SalesService, private router: Router) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }

    this.salesService.getReport().subscribe((data: any[]) => {
      this.sales = data;
    });
  }
}
