import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { propTypesShapes } from '../../constants';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomTextarea from '../../components/CustomTextarea/CustomTextarea';
import CustomButton from '../../components/CustomButton/CustomButton';
import { editMovie } from '../../redux/movies/movies.actions';
import { moviesDataSelector } from '../../redux/movies/movies.selectors';
import styles from './EditMoviePage.module.scss';

const EditMoviePage = ({ match, movies, editMovie, history }) => {
  const [errors, setErrors] = useState([]);

  const editableMovieId = Number(match.params.id);
  const { id, title, posterUrl, director, genres, description } = movies.find((movie) => movie.id === editableMovieId);
  const INITIAL_DATA = {
    title,
    posterUrl,
    director,
    genres,
    description,
  };

  const [formData, changeFormData] = useState(INITIAL_DATA);

  const inputChangeHandler = (event, fieldName) => {
    const value = event.target.value;

    changeFormData((prevState) => ({
      ...prevState,
      [fieldName]: value.trim()
    }))
  };

  const genresChangeHandler = (event) => {
    const inputValue = event.target.value;
    const genreRegExp = /[A-Za-z\s]{3,}/gm;

    changeFormData((prevState) => ({
      ...prevState,
      genres: inputValue.match(genreRegExp)
    }));
  };

  const validateForm = (formData) => {
    const validationErrors = [];
    const urlRegExp = /(http(s)?:\/\/.)[-a-zA-Z0-9%:._]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9_.?&/]*)/gm;

    if (formData.title.length < 3) {
      validationErrors.push('Invalid title.')
    } else if (!urlRegExp.test(formData.posterUrl)) {
      validationErrors.push('Invalid poster url.');
    }
    return validationErrors;
  };

  const submitHandler = () => {
    const validationErrors = validateForm(formData);

    if (validationErrors.length) {
      setErrors(() => [...validationErrors]);
    } else {
      setErrors(() => []);
      editMovie(id, formData);
      history.push(`/movie/${id}`);
    }
  };

  const goBackHandler = () => history.push(`/movie/${id}`);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <form className='col-lg-7 col-md-10'>
          <CustomInput
            type='text'
            label='Title:'
            placeholder='title'
            id='title'
            value={title}
            required={true}
            changeHandler={(event) => inputChangeHandler(event, 'title')} />
          <CustomInput
            type='url'
            label='Poster URL:'
            placeholder='url'
            id='poster'
            value={posterUrl}
            required={true}
            changeHandler={(event) => inputChangeHandler(event, 'posterUrl')} />
          <CustomInput
            type='text'
            label='Director:'
            placeholder='director'
            id='director'
            value={director}
            required={true}
            changeHandler={(event) => inputChangeHandler(event, 'director')} />
          <CustomInput
            type='text'
            label='Genres:'
            placeholder='type genres divided by any separator, except whitespace'
            id='genres'
            value={genres.join(',')}
            required={true}
            changeHandler={genresChangeHandler} />
          <CustomTextarea
            label='Description:'
            placeholder='description'
            id='description'
            value={description}
            required={true}
            changeHandler={(event) => inputChangeHandler(event, 'description')} />
          <div className={styles.ButtonsContainer}>
            <CustomButton
              type='submit'
              value='Submit'
              clickHandler={submitHandler} />
            <CustomButton
              type='button'
              value='Go back'
              clickHandler={goBackHandler} />
          </div>
          <div className={styles.ErrorsContainer}>
            { errors.join(' ') }
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: moviesDataSelector(state)
});

const mapDispatchToProps = {
  editMovie: (editableMovieId, editableMovieData) => editMovie(editableMovieId, editableMovieData)
};

EditMoviePage.propTypes = {
  movies: PropTypes.arrayOf(propTypesShapes.MOVIE).isRequired,
  editMovie: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMoviePage);
