import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../imovie';
import { Store, select } from '@ngrx/store';
import * as MovieActions from '../store/movie.actions';
import * as MovieSelectors from '../store/movie.selectors';
import { Observable, map } from 'rxjs';
import { MovieState } from 'src/app/movie.state';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})
export class MovietableComponent implements OnInit {
  
  MovieList$ : Observable<IMovie[]>;
  isLoading : Observable<boolean>;

  constructor(private movieSvc : MovieService, private store : Store<AppState>){
    this.MovieList$ = this.store.pipe(select(MovieSelectors.MoviesListSelector));
    this.isLoading = this.store.pipe(select(MovieSelectors.IsLoadingSelector));
  }
  ngOnInit(): void {
    this.store.dispatch(MovieActions.GetMoviesAction());
  }

  DeleteMovieByIndexAsync(movie: IMovie){
    this.store.dispatch(MovieActions.DeleteMovieByIndexAction({MovieId : movie.Id}));
  }

}
