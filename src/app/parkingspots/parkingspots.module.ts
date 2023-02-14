import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ParkingspotsRoutingModule } from './parkingspots-routing.module';
import { ParkingspotsComponent } from './parkingspots/parkingspots.component';

@NgModule({
  declarations: [
    ParkingspotsComponent
  ],
  imports: [
    CommonModule,
    ParkingspotsRoutingModule,
    MatTableModule
  ]
})
export class ParkingspotsModule { }
