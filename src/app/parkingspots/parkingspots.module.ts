import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingspotsRoutingModule } from './parkingspots-routing.module';
import { ParkingspotsComponent } from './parkingspots/parkingspots.component';


@NgModule({
  declarations: [
    ParkingspotsComponent
  ],
  imports: [
    CommonModule,
    ParkingspotsRoutingModule
  ]
})
export class ParkingspotsModule { }
