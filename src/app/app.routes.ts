import { Routes } from '@angular/router';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { CartComponent } from './cart/components/cart/cart.component';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',component:AllProductsComponent,title:'Products'},
    {path:'cart',component:CartComponent,title:"Cart"},
    {path:"**" , component:AllProductsComponent,title:'Products'}
];
