import React from 'react';

import MoviesGallery from './MoviesGallery/MoviesGallery';
import MoviesSortingForm from './MoviesSortingForm/MoviesSortingForm';

const HomePage = () => (
  <div className='container-fluid'>
    <div className='row justify-content-center'>
      <div className='col-md-7'>
        <MoviesSortingForm />
        <MoviesGallery />
      </div>
    </div>
  </div>
);

export default HomePage;
