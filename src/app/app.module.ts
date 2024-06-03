import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './views/reports/reports.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SalesService } from './services/sales.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginComponent } from './views/login/login.component';
import { SalesComponent } from './views/sales/sales.component';
import { AddSaleComponent } from './views/add-sale/add-sale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InventoryService } from './services/inventory.service';
import { StoresComponent } from './views/stores/stores.component';
import { StoresService } from './services/stores.service';
import { InventoryComponent } from './views/inventory/inventory.component';
import { AddProductComponent } from './views/add-product/add-product.component';
import { UpdateProductComponent } from './views/update-product/update-product.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    AddSaleComponent,
    ReportsComponent,
    StoresComponent,
    InventoryComponent,
    AddProductComponent,
    UpdateProductComponent,
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot()
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SalesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthService,
    InventoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    StoresService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
