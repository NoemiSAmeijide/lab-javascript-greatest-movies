//import { movies } from "./data.js";
const movies = require("./data.js");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => {
  const rawList = moviesArray.map((movie) => movie.director);

  //Bonus
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });

  return cleanList;
};

console.log(`1. Here are the list of All Directors:`, getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(moviesArray) {
// }
const howManyMovies = (moviesArray) => {
  const steven = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const stevenDrama = steven.filter((movie) => movie.genre.includes("Drama"));
  return stevenDrama;
};
console.log("2. Here are the list of All Spielberg's:", howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => {
  let averageScore;
  const scoreses = moviesArray.reduce((sumaScores, movie) => {
    sumaScores += movie.score;
    return sumaScores;
  }, 0);
  const avg = scoreses / moviesArray.length;
  return Number(avg.toFixed(2));
  //return scoreses / moviesArray.length;
};
console.log(`3. Here are the list of All Spielberg's:${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => {
  const theDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  const scores = theDrama.reduce((sumaScores, movie) => {
    sumaScores += movie.score;
    return sumaScores;
  }, 0);
  const avg = scores / movies.length;
  return Number(avg.toFixed(2));
};

console.log(`4. Average score of Drama movies: ${dramaMoviesScore(movies)}`);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) => {
  let orderdListTitle;
  const orderdList = moviesArray.sort((a, b) => a.year - b.year);
  for (let index = 0; index < moviesArray.length; index++) {
    const element = moviesArray[index].title;
    orderdListTitle += element;
  }
  return orderdListTitle;
};
console.log(`5. Movies ordered by ascending year: ${orderByYear(movies)}`);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {
  let orderdAlphabeticallyTitle;
  moviesArray.sort((a, b) => (a.title < b.title ? -1 : 0));

  moviesArray.slice(0, 20);
  for (let index = 0; index < 20; index++) {
    const element = moviesArray[index].title;
    orderdAlphabeticallyTitle += element;
  }
  return orderdAlphabeticallyTitle;
};
console.log(
  `6. The ordered movies by title is: ${orderAlphabetically(movies)}`
);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
