import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {movie} from "../../../PropTypesShapes";

import MovieCard from "./MovieCard/MovieCard";

import styles from "./MoviesGallery.module.scss";

import {moviesDataSelector, searchFieldValueSelector} from "../../../redux/homepage/homepage.selectors";


const MoviesGallery = ({ movies, searchFieldValue }) => {
  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchFieldValue.toLowerCase()));

  return (
    <div className={styles.CardContainer}>
      { filteredMovies.length ? filteredMovies.map(movie => <MovieCard key={movie.id}{...movie} /> ) : <h3>There are no such movies there</h3> }
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: moviesDataSelector(state),
  searchFieldValue: searchFieldValueSelector(state)
});

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(movie).isRequired,
  searchFieldValue: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(MoviesGallery);
