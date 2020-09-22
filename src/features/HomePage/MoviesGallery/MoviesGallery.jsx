import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { propTypesShapes } from '../../../constants';
import MovieCard from './MovieCard/MovieCard';
import { filteredMoviesSelector } from '../../../redux/movies/movies.selectors';
import styles from './MoviesGallery.module.scss';


const MoviesGallery = ({ filteredMovies }) => (
  <div className={styles.cardContainer}>
    {
      filteredMovies.length ? (
        filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        ) : (
          <h3>There are no such movies there</h3>
        )
    }
  </div>
);

const mapStateToProps = (state) => ({
  filteredMovies: filteredMoviesSelector(state)
});

MoviesGallery.propTypes = {
 filteredMovies: PropTypes.arrayOf(propTypesShapes.MOVIE)
};

export default connect(mapStateToProps)(MoviesGallery);
