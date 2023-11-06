import { createReducer, on } from '@ngrx/store';
import { MovieState } from 'src/app/movie.state';
import * as MovieActions from './movie.actions';

let initialState: MovieState = {
  IsLoading: false,
  Movies: [],
  Error: '',
};

export const MovieReducer = createReducer(
  initialState,
  on(MovieActions.GetMoviesAction, (state) => {
    return { ...state, IsLoading: true };
  }),
  on(MovieActions.GetMoviesActionSuccess, (state, action) => {
    return { ...state, IsLoading: false, Movies: action.Movies };
  })
);
