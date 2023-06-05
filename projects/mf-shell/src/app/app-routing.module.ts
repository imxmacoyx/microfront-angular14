import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from '../../../mf-shopping/src/app/products/products.module';
import { ProductsComponent } from '../../../mf-shopping/src/app/products/products.component';
import { PaymentComponent } from '../../../mf-payment/src/app/payment/payment.component';

const routes: Routes = [
  {
    // Cuando es un módulo
    path:'',
    loadChildren: () => import('mfShopping/ProductModule').then( (m) => m.ProductsModule)
  },
  {
    // Cuando es un standalone component
    path:'payment',
    loadComponent: () => import('mfPayment/PaymentComponent').then( (c) => c.PaymentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
