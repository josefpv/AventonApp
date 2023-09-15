import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtroPage } from './otro.page';

const routes: Routes = [
  {
    path: '',
    component: OtroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtroPageRoutingModule {}
