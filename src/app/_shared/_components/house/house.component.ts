import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  @Input() houseOrder;
  constructor() { }

  ngOnInit() {
  }

}
