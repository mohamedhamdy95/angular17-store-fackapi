import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() data:any={}
  @Output() clickedItem = new EventEmitter()
  constructor(){}
  addItemToCart(){
    this.clickedItem.emit(this.data)
  }
}
