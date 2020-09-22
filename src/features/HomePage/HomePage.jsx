import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MoviesGallery from './MoviesGallery/MoviesGallery';
import MoviesSortingForm from './MoviesSortingForm/MoviesSortingForm';
import MovieDetails from './MovieDetails/MovieDetails';
import { activeMovieDataSelector } from '../../redux/homepage/homepage.selectors';
import { movie } from '../../PropTypesShapes';
import styles from './Homepage.module.scss';


const HomePage = ({ activeMovieData }) => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-md-7'>
        <MoviesSortingForm />
        <MoviesGallery />
      </div>
      <div className='col-md-5'>
        {
          activeMovieData ? (
            <MovieDetails {...activeMovieData} />
          ) : (
            <h2 className={styles.selectPostLabel}>Select movie</h2>
          )
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  activeMovieData: activeMovieDataSelector(state)
});

HomePage.propTypes = {
  activeMovieData: PropTypes.shape(movie)
};

export default connect(mapStateToProps)(HomePage);
