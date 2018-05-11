import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaidListComponent } from './raid-list/raid-list.component';


const routes: Routes = [
  {
    path: '', component: RaidListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
