import React, { Component } from 'react';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieCard from "./MovieCard/MovieCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";

import { moviesData } from '../../movies.data';
import styles from './Homepage.module.scss';



class HomePage extends Component {
  state = {
    movies: moviesData.slice(0),
    activeMovieID: null,
    searchFieldValue: '',
    sortByLikesAscending: true,
    sortByRatingAscending: true
  };

  sortMoviesByProperty = (comparedParam, stateSortFlag) => {
    const sortingCoefficient = this.state[stateSortFlag] ? 1 : -1;

    const sortedMovies = this.state.movies.sort((currentItem, previousItem) => {
      if (currentItem[comparedParam] < previousItem[comparedParam]) {
        return sortingCoefficient;
      } else if (currentItem[comparedParam] > previousItem[comparedParam]) {
        return -1 * sortingCoefficient;
      } else {
        return 0;
      }
    });

    this.setState({
      movies: sortedMovies,
      [stateSortFlag]: !this.state[stateSortFlag],
    });
  };

  sortByLikesHandler = (event) => {
    event.preventDefault();

    this.sortMoviesByProperty('likes', 'sortByLikesAscending');
  };

  sortByRatingHandler = (event) => {
    event.preventDefault();

    this.sortMoviesByProperty('stars', 'sortByRatingAscending');
  };

  movieClickHandler = (movieId) => {
    this.setState({
      activeMovieID: movieId
    })
  };

  searchMoviesChangeHandler = (event) => {
    this.setState({
      searchFieldValue: event.target.value
    })
  };

  resetHandler = (event) => {
    event.preventDefault();

    this.setState({
      movies: moviesData.slice(0),
      sortByLikesAscending: true,
      sortByRatingAscending: true,
    });
  };

  changeLikesHandler = (movieId, value) => {
    const moviesCopy = this.state.movies.slice(0);
    const activeMovie = moviesCopy.find(movie => movie.id === movieId);

    activeMovie.likes += value;

    this.setState({
      movies: moviesCopy
    });
  };

  changeStarsHandler = (movieId, value) => {
    const moviesCopy = this.state.movies.slice(0);
    const activeMovie = moviesCopy.find(movie => movie.id === movieId);

    activeMovie.stars = value;

    this.setState({
      movies: moviesCopy
    });
  };

  render() {
    const { movies, searchFieldValue, activeMovieID } = this.state;

    const activeMovie = movies.find(movie => movie.id === activeMovieID);

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchFieldValue.toLowerCase()));

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7'>
            <form className={styles.SortMoviesForm}>
              <div>
                <h2>Sort movies</h2>
                <CustomButton value="By likes" clickHandler={this.sortByLikesHandler} />
                <CustomButton value="By rating" clickHandler={this.sortByRatingHandler} />
                <CustomButton value="Reset" clickHandler={this.resetHandler} />
              </div>
              <CustomInput
                type="text"
                changeHandler={this.searchMoviesChangeHandler}
                placeholder="Enter movie title"
              />
            </form>
            <div className={styles.CardContainer}>
              { filteredMovies.map(movie =>
                  <MovieCard
                    key={movie.id}
                    movieClickHandler={this.movieClickHandler}
                    changeLikesHandler={this.changeLikesHandler}
                    changeStarsHandler={this.changeStarsHandler}
                    {...movie}
                  />
                )
              }
            </div>
          </div>
          <div className='col-md-5'>
            { this.state.activeMovieID ? <MovieDetails {...activeMovie} /> : <h2 className={styles.SelectPostLabel}>Select movie</h2> }
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
