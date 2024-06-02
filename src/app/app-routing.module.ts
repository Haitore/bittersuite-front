import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { SalesComponent } from './views/sales/sales.component';
import { AddSaleComponent } from './views/add-sale/add-sale.component';
import { ReportsComponent } from './views/reports/reports.component';
import { StoresComponent } from './views/stores/stores.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'addsale',
    component: AddSaleComponent
  },
  {
    path: 'report',
    component: ReportsComponent
  },
  {
    path: 'stores',
    component: StoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
