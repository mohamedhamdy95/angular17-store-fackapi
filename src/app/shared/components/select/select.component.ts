import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../../product/services/product.service';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() title:string="";
  @Input() data:any[]=[];
  @Output() selecedData = new EventEmitter();
  constructor(private service:ProductService){}
  filterFunc(event:any){
    this.selecedData.emit(event)
  }

}
