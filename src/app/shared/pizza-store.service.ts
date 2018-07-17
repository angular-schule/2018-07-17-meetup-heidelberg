import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from './pizza';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pizza[]> {
    const url = 'http://pizza.angular.schule/pizzas';
    return this.http.get<Pizza[]>(url).pipe(
      map(pizzas => [...pizzas, {id: 99, name:'Grappa', description: 'grappa', rating:5, price: 0}]),
      catchError(err => {
        console.log('ERROR OCCURED');
        return throwError('HEY, an error occured somewhere in the service');
      })
    );
  }
}
