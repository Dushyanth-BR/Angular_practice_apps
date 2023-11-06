import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviehomeComponent } from './movie/moviehome/moviehome.component';
import { MovietableComponent } from './movie/movietable/movietable.component';
import { AddmovieComponent } from './movie/addmovie/addmovie.component';

const routes: Routes = [
  { path : 'movietable', component : MovietableComponent},
  { path : 'addmovie', component : AddmovieComponent},
  { path : '', component : MoviehomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
