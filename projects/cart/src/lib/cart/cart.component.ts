import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'lib-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() orders: Pizza[] = [];
  total = 0;

  ngOnInit() {
  }

  ngOnChanges() {
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.orders.reduce((acc, pizza) => acc + pizza.price, 0);
  }

}
