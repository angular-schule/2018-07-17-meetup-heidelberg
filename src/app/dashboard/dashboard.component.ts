import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { PizzaStoreService } from '../shared/pizza-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pizzas: Pizza[] = [];
  orderedPizzas: Pizza[] = [];

  constructor(private pss: PizzaStoreService) { }

  addOrder(pizza: Pizza) {
    this.orderedPizzas = [...this.orderedPizzas, pizza];
  }

  ngOnInit() {
    this.pss.getAll()
      .subscribe(
        pizzas => this.pizzas = pizzas,
        err => console.error('COMP ERROR', err)
      );
  }

}
