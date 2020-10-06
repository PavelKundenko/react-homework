import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { propTypesShapes } from '../../../constants';
import MovieCard from './MovieCard/MovieCard';
import Spinner from '../../../components/Spinner/Spinner';
import { fetchMovies } from '../../../redux/movies/movies.async.actions';
import { filteredMoviesSelector, isMoviesLoadingSelector } from '../../../redux/movies/movies.selectors';
import styles from './MoviesGallery.module.scss';

class MoviesGallery extends Component{
  componentDidMount() {
    this.props.fetchMovies();
  };

  render() {
    const { filteredMovies, isMoviesDataLoading } = this.props;

    if (isMoviesDataLoading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.cardContainer}>
          {
            filteredMovies.length ? (
              filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
              ))
            ) : (
              <h3>There are no such movies there</h3>
            )
          }
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  filteredMovies: filteredMoviesSelector(state),
  isMoviesDataLoading: isMoviesLoadingSelector(state)
});

const mapDispatchToProps = {
  fetchMovies
};

MoviesGallery.propTypes = {
  filteredMovies: PropTypes.arrayOf(propTypesShapes.MOVIE),
  isMoviesDataLoading: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesGallery);
