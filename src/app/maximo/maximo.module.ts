import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaximoPageRoutingModule } from './maximo-routing.module';

import { MaximoPage } from './maximo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaximoPageRoutingModule
  ],
  declarations: [MaximoPage]
})
export class MaximoPageModule {}
