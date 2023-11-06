import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../movie.service';
import * as MovieActions from './movie.actions';
import { map, mergeMap, of } from 'rxjs';
import { IMovie } from '../imovie';

@Injectable()
export class MovieEffects {
  constructor(private action$: Actions, private movieSvc: MovieService) {}

  GetMovies$ = createEffect(() => {
    return this.action$.pipe(
      ofType(MovieActions.GetMoviesAction),
      mergeMap(() => {
        return this.movieSvc.GetAllMoviesAsync().pipe(
          map((movies) => {
            return MovieActions.GetMoviesActionSuccess({ Movies: movies });
          })
        );
      })
    );
  });

  AddMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(MovieActions.AddMovieAction),
      mergeMap((action) => {
        return of(this.movieSvc.AddMovieAsync(action.Movie)).pipe(
          map(() => {
            return MovieActions.GetMoviesAction();
          })
        );
      })
    );
  });

  RemoveMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(MovieActions.DeleteMovieByIndexAction),
      mergeMap((action) => {
        return of(this.movieSvc.DeleteMovieByIndexAsync(action.MovieId)).pipe(
          map(() => {
            return MovieActions.GetMoviesAction();
          })
        );
      })
    );
  });
}
