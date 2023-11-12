import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaximoPage } from './maximo.page';

const routes: Routes = [
  {
    path: '',
    component: MaximoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaximoPageRoutingModule {}
