import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

let selectFeature = (appState : AppState) => appState.MovieReducer;

export const IsLoadingSelector = createSelector(selectFeature, ((state)=>(state.IsLoading)));

export const MoviesListSelector = createSelector(selectFeature, ((state)=>(state.Movies)));


