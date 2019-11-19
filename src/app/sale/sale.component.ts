import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GlobalConfig } from '../_util/global.config';



@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  sales;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.sales = this.http.get(`${GlobalConfig.BASE_URL}/house-order/sales`);

  }

}
