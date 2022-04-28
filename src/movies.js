// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  const allDirectors = array.map(function (elem) {
    return elem.director;
  });
  const allDirectorsClean=[...new Set(allDirectors)]
  return allDirectorsClean;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const stevenMovies = array.filter(
    (elem) => elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')
  );

  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  let sum = 0;
  let avg = 0;
  for(let i=0;i<array.length;i++)
    {
  sum += array[i].score
  avg = sum/array.length
    } return avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let sortedArray = [...array];
  return sortedArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year
    }
  })
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(array) {
  let sortedArr = [...array];
  sortedArr.sort((a, b) => a.title.localeCompare(b.title));
  let sortedTitles = sortedArr.map((el) => el.title);
  return sortedTitles.splice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
