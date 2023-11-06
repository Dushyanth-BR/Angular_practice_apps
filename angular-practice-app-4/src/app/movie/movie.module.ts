import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviehomeComponent } from './moviehome/moviehome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovietableComponent } from './movietable/movietable.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MovieReducer } from './store/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movie.effects';



@NgModule({
  declarations: [
    MoviehomeComponent,
    NavbarComponent,
    MovietableComponent,
    AddmovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature("MovieReducer", MovieReducer),
    EffectsModule.forFeature([MovieEffects])
  ],
  exports: [
    MoviehomeComponent,
    NavbarComponent,
    MovietableComponent,
    AddmovieComponent
  ]
})
export class MovieModule { }
