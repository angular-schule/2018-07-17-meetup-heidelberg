import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../shared/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza;
  @Output() order = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
  }

  orderPizza() {
    this.order.emit(this.pizza);
  }

}
