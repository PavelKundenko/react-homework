import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { movie } from "../../PropTypesShapes";

import MoviesGallery from "./MoviesGallery/MoviesGallery";
import MoviesSortingForm from "./MoviesSortingForm/MoviesSortingForm";
import MovieDetails from './MovieDetails/MovieDetails';

import styles from './Homepage.module.scss';

import { activeMovieIdSelector, moviesDataSelector } from "../../redux/homepage/homepage.selectors";


const HomePage = ({ activeMovieId, movies }) => {
  const activeMovieData = movies.find(movie => movie.id === activeMovieId);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-7'>
          <MoviesSortingForm />
          <MoviesGallery />
        </div>
        <div className='col-md-5'>
          { activeMovieId ? <MovieDetails {...activeMovieData} /> : <h2 className={styles.SelectPostLabel}>Select movie</h2> }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeMovieId: activeMovieIdSelector(state),
  movies: moviesDataSelector(state)
});

HomePage.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  activeMovieField: PropTypes.number
};

export default connect(mapStateToProps)(HomePage);
