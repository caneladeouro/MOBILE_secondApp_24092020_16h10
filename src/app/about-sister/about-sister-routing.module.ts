import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSisterPage } from './about-sister.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSisterPageRoutingModule {}
