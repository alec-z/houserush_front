import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SaleComponent} from './sale/sale.component';
import {HouseOrderComponent} from './house-order/house-order.component';
import {FavouriteOrderComponent} from './favourite-order/favourite-order.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SaleComponent },
  { path: 'sales/:saleId', component: HouseOrderComponent},
  { path: 'favourite-orders', component: FavouriteOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
