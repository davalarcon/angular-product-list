import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildProductComponentComponent } from './build-product-component/build-product-component.component';

const routes: Routes = [
  {
    path: '',
    component: BuildProductComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
