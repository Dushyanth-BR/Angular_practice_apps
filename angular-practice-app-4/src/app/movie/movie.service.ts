import { Injectable } from '@angular/core';
import { IMovie } from './imovie';
import { Observable, delay, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  MovieList: IMovie[];

  constructor() {
    this.MovieList = [
      {
        Id: 1,
        Name: 'Bahubali',
        Language: 'Telugu',
        Genre: 'Historical',
        Rating: 8,
        Actors: ['Prabhas', 'Anushka'],
      },
      {
        Id: 2,
        Name: 'Avengers Endgame',
        Language: 'English',
        Genre: 'Sci-Fi',
        Rating: 8.5,
        Actors: ['Robert Downy Jr', 'Chris Hemsworth'],
      },
      {
        Id: 3,
        Name: 'K.G.F',
        Language: 'Kannada',
        Genre: 'Action',
        Rating: 8.9,
        Actors: ['Yash'],
      },
      {
        Id: 4,
        Name: 'The Shawshank Redemption',
        Language: 'English',
        Genre: 'Drama',
        Rating: 9.5,
        Actors: [],
      },
    ];
  }

  public GetAllMoviesAsync() : Observable<IMovie[]>{
    return of(this.MovieList).pipe(delay(1000));
  }

  public AddMovieAsync(movie : IMovie){
    this.MovieList = [...this.MovieList, movie];
  }

  public DeleteMovieByIndexAsync(movieId: number){
    this.MovieList = this.MovieList.filter((m)=>{return m.Id != movieId});
  }

}
