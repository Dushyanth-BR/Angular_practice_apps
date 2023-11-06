import { IMovie } from "./movie/imovie";

export interface MovieState{
    IsLoading : boolean,
    Movies : IMovie[],
    Error : string    
}