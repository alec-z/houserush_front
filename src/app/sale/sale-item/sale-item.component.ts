import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss']
})
export class SaleItemComponent implements OnInit {
  @Input() sale;

  constructor() { }

  ngOnInit() {
  }

}
