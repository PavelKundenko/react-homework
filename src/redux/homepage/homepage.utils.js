export const changeLikes = (movies, { movieId, likesAmount }) => {
  const moviesCopy =  [...movies];

  return moviesCopy.map((movie) => movie.id === movieId ? { ...movie, likes: movie.likes + likesAmount } : movie);
};

export const changeRating = (movies, { movieId, newRating }) => {
  const moviesCopy =  [...movies];

  return moviesCopy.map((movie) => movie.id === movieId ? { ...movie, stars: newRating } : movie);
};

export const sortMoviesByProperty = (movies, stateSortFlag, comparedParam) => {
  const moviesCopy = [...movies];
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
