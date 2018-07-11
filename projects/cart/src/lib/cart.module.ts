import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartItemComponent, CartComponent],
  exports: [CartComponent]
})
export class CartModule { }
