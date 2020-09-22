import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { movie } from '../../../PropTypesShapes';
import MovieCard from './MovieCard/MovieCard';
import { filteredMoviesSelector } from '../../../redux/homepage/homepage.selectors';
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
  filteredMovies: filteredMoviesSelector(state),
});

MoviesGallery.propTypes = {
 filteredMovies: PropTypes.arrayOf(movie)
};

export default connect(mapStateToProps)(MoviesGallery);
