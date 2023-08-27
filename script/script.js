const numberOfFilms = +prompt("How many films did you watch?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


//--------------------------------------
// QUESTIONS FIRST VERSION WITHOUT CYCLE
//--------------------------------------
//
//const oneLastMovieA = prompt('One last film did you watch?', ''),
//      movieRateA = prompt('Can you rate it?', ''),
//      oneLastMovieB = prompt('One last film did you watch?', ''),
//      movieRateB = prompt('Can you rate it?', ''),
//
// personalMovieDB.movies[oneLastMovieA] = movieRateA;
// personalMovieDB.movies[oneLastMovieB] = movieRateB;

//-------------------------------------
// QUESTIONS SECOND VERSION WITH "WHILE"
//-------------------------------------

// let i = 0;
// while (i < 2) {
//
//   const oneLastMovieA = prompt('One last film did you watch?', ''),
//         movieRateB = prompt('Can you rate it?', '');
//
//   personalMovieDB.movies[oneLastMovieA] = movieRateB;
//   i++;
//}

//----------------------------------------
// QUESTIONS THIRD VERSION WITH "DO WHILE"
//----------------------------------------
// let i = 0;
// do {
//   const oneLastMovieA = prompt('One last film did you watch?', ''),
//          movieRateB = prompt('Can you rate it?', '');
//
//    personalMovieDB.movies[oneLastMovieA] = movieRateB;
//    i++;
// }while(i < 2);

//-----------------------
// QUESTIONS MAIN VERSION
//-----------------------

for (let i = 0; i < 2; i++){

  const oneLastMovie = prompt('One last film did you watch?', ''),
        movieRate = prompt('Can you rate it?', '');

  if (oneLastMovie != null && movieRate != null && oneLastMovie!= '' && oneLastMovie.length < 50) {

    personalMovieDB.movies[oneLastMovie] = movieRate;
    console.log("Done!");
  } else {
    console.log("Error!")
    i--;
  }

}

if (personalMovieDB.count < 10) {
  console.log("Watched very few films!")

} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log("You are a typical viewer")

} else if (personalMovieDB.count >= 30) {
  console.log("You are a movie buff:)")

} else {
  console.log("Error!")
}

console.log(personalMovieDB);





