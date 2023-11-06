import { createAction, props } from "@ngrx/store";
import { IMovie } from "../imovie";

export const GetMoviesAction = createAction("[Movie] Get Movies");

export const GetMoviesActionSuccess = createAction("[Movie] Get Movies Successfully", props<{Movies : IMovie[]}>());

export const AddMovieAction = createAction("[Movie] Add Movie Action", props<{Movie : IMovie}>());

export const DeleteMovieByIndexAction = createAction("[Movie] Delete Movie By Index", props<{MovieId : number}>());