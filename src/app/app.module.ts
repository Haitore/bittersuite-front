import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './views/reports/reports.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SalesService } from './services/sales.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { SalesComponent } from './views/sales/sales.component';
import { AddSaleComponent } from './views/add-sale/add-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    SalesComponent,
    AddSaleComponent, ReportsComponent],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [
    SalesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
