const numberOfFilms = +prompt("How many films did you watch?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const oneLastMovieA = prompt('One last film did you watch?', ''),
      movieRateA = prompt('Can you rate it?', ''),
      oneLastMovieB = prompt('One last film did you watch?', ''),
      movieRateB = prompt('Can you rate it?', '');

personalMovieDB.movies[oneLastMovieA] = movieRateA;
personalMovieDB.movies[oneLastMovieB] = movieRateB;

console.log(personalMovieDB);





