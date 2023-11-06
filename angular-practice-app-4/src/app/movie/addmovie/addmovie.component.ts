import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { concatWith } from 'rxjs';
import { IMovie } from '../imovie';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as MovieActions from '../store/movie.actions';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {

  Movie : any;

  constructor(private movieSvc : MovieService, private fb : FormBuilder, private store : Store<AppState>){

    this.Movie = this.fb.group({
      MovieId : ['',[Validators.required]],
      MovieName : ['',[Validators.required]],
      MovieLanguage : ['',[Validators.required]],
      MovieGenre : ['',[Validators.required]],
      MovieRating : ['',[Validators.required]],
      MovieActors : this.fb.array([])
    })
  }

  AddMovie(){
    let movie: IMovie = {
      Id: this.Movie.value.MovieId,
      Name: this.Movie.value.MovieName,
      Language: this.Movie.value.MovieLanguage,
      Genre: this.Movie.value.MovieGenre,
      Rating: this.Movie.value.MovieRating,
      Actors: []
    }

    this.store.dispatch(MovieActions.AddMovieAction({Movie : movie}));
  }

  get GetActors(){
    return this.Movie.value.MovieActors ;
  }

  AddActor(actorName : HTMLInputElement){
    (this.Movie.controls.MovieActors as FormArray).push(new FormControl(actorName.value))
    actorName.value='';
    console.log(this.Movie);
  
  }

  DeleteActor(index : number){
    (this.Movie.controls.MovieActors as FormArray).removeAt(index);
    console.log(this.Movie);
  }




}
