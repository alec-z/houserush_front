import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalConfig } from '../_util/global.config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-house-order',
  templateUrl: './house-order.component.html',
  styleUrls: ['./house-order.component.scss']
})
export class HouseOrderComponent implements OnInit {
  houseOrders;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.houseOrders = this.http.get(`${GlobalConfig.BASE_URL}/house-order/sales/${params.get('saleId')}`).pipe(map(sale => {
        return sale['houseOrders'];
      } ));
    });

  }

}
