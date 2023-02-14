import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'parkingspots'},

  {
    path: 'parkingspots',
    loadChildren: () => import('./parkingspots/parkingspots.module').then(m => m.ParkingspotsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
