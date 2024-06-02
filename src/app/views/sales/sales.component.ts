import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent implements OnInit {
  sales: any[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getReport().subscribe((data: any[]) => {
      this.sales = data
    })
  }
}
