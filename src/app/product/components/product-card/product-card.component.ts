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
  @Output() item = new EventEmitter();
  constructor(){}
  addToCart(){
    this.item.emit(this.data)
  }
}
