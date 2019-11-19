import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HouseOrderComponent } from './house-order/house-order.component';
import { SaleComponent } from './sale/sale.component';
import { FavouriteOrderComponent } from './favourite-order/favourite-order.component';
import { HouseComponent } from './_shared/_components/house/house.component';
import { SaleItemComponent } from './sale/sale-item/sale-item.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {JwtInterceptor} from './_shared/_helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HouseOrderComponent,
    SaleComponent,
    FavouriteOrderComponent,
    HouseComponent,
    SaleItemComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
