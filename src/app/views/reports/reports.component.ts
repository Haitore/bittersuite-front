// reports.component.ts
import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  sales: any[] = [];
  filteredSales: any[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getReport().subscribe((data: any[]) => {
      this.sales = data;
    });
  }

  onSubmit(): void {
    if (this.startDate > this.endDate) {
      return;
    }

    if (this.startDate && this.endDate) {
      this.filteredSales = this.sales.filter(sale => {
        const saleDate = new Date(sale.date_sale);
        const start = new Date(this.startDate);
        const end = new Date(this.endDate);
        return saleDate >= start && saleDate <= end;
      });
      this.exportToExcel();
    }
  }

  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredSales);

    const totalPrice = this.filteredSales.reduce((acc, sale) => acc + parseFloat(sale.total_price), 0);
    const lastRow = this.filteredSales.length + 1;

    worksheet[`G${lastRow}`] = { t: 'n', v: totalPrice };
    worksheet[`H${lastRow}`] = { t: 's', v: 'Total Price' };

    XLSX.utils.sheet_add_aoa(worksheet, [['Total Price', totalPrice]], { origin: `G${lastRow}` });

    const workbook: XLSX.WorkBook = { Sheets: { 'Sales': worksheet }, SheetNames: ['Sales'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'sales');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}_export_${new Date().getTime()}.xlsx`);
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
