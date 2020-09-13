export const changeLikes = (movies, { movieId, likesAmount }) => {
  const moviesCopy = movies.slice(0);
  const activeMovie = moviesCopy.find(movie => movie.id === movieId);

  activeMovie.likes += likesAmount;

  return moviesCopy;
};

export const changeRating = (movies, { movieId, newRating }) => {
  const moviesCopy = movies.slice(0);
  const activeMovie = moviesCopy.find(movie => movie.id === movieId);

  activeMovie.stars = newRating;

  return moviesCopy;
};

export const sortMoviesByProperty = (movies, stateSortFlag, comparedParam) => {
  const moviesCopy = movies.slice(0);
  const sortingCoefficient = stateSortFlag ? 1 : -1;

  return moviesCopy.sort((currentItem, previousItem) => {
    if (currentItem[comparedParam] < previousItem[comparedParam]) {
      return sortingCoefficient;
    } else if (currentItem[comparedParam] > previousItem[comparedParam]) {
      return -1 * sortingCoefficient;
    } else {
      return 0;
    }
  });
};
