import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSisterPageRoutingModule } from './about-sister-routing.module';

import { AboutSisterPage } from './about-sister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSisterPageRoutingModule
  ],
  declarations: [AboutSisterPage]
})
export class AboutSisterPageModule {}
