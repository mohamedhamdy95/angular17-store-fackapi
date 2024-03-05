import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SelectComponent } from '../../../shared/components/select/select.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import e from 'express';
SelectComponent
@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [SelectComponent , ProductCardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit{
  constructor(private service:ProductService){}
  productsList:any[]=[]
  categoriesList:any[]=[]
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }
  getProducts(){
    this.service.getAllProducts().subscribe({
      next:(res)=>{
        this.productsList=res
      },
      error:(err)=>{
        alert(err)
      }
    })
  }


  filterCategory(event:any){
    let cateValue = event.target.value
    if(cateValue == "all"){
      this.getProducts()
    }else{
      this.getOneCategories(cateValue)
    }
  }

    
  getOneCategories(word:any){
    this.service.getSpecificCategories(word).subscribe({
      next:(res)=>{
        this.productsList=res
      }
    })
}

  getCategories(){
    this.service.gwtAllCategories().subscribe({
      next:(res)=>{
        this.categoriesList=res
      },
      error:(err)=>{
        alert(err)
      }
    })
  }


  addToCart(event:any){
    console.log(event)
  }

}
