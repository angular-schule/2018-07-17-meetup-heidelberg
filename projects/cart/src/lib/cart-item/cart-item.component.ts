import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'lib-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() pizza: Pizza;

  ngOnInit() {
  }

}
