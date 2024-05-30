import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SalesService } from './services/sales.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ReportsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
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
