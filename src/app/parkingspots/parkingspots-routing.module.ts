import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingspotsComponent } from './parkingspots/parkingspots.component';

const routes: Routes = [
  {
    path: '', component: ParkingspotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingspotsRoutingModule { }
