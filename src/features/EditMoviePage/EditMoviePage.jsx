import React,  { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { propTypesShapes } from '../../constants';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomTextarea from '../../components/CustomTextarea/CustomTextarea';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';
import { activeMovieDataUpdated } from '../../redux/movies/movies.actions';
import { fetchUpdateMovie, fetchMovieById } from '../../redux/movies/movies.async.actions';
import { activeMovieDataSelector } from '../../redux/movies/movies.selectors';
import styles from './EditMoviePage.module.scss';

class EditMoviePage extends Component  {
  componentDidMount() {
    const { match, fetchMovieById } = this.props;

    fetchMovieById(Number(match.params.id));
  }

  state = {
    errors: []
  };

  inputChangeHandler = (event, fieldName) => {
    const value = event.target.value;
    const { activeMovieData, activeMovieDataUpdated } = this.props;

    activeMovieDataUpdated({
      ...activeMovieData,
      [fieldName]: value.trim()
    });
  };

  genresChangeHandler = (event) => {
    const inputValue = event.target.value;
    const genreRegExp = /[A-Za-z\s]{3,}/gm;
    const { activeMovieData, activeMovieDataUpdated } = this.props;

    activeMovieDataUpdated({
      ...activeMovieData,
      genres: inputValue.match(genreRegExp)
    });
  };

  validateForm = (formData) => {
    const validationResult = {
      isValid: true,
      errors: []
    };

    if (formData.title.length < 3) {
      validationResult.errors.push('Invalid title.')
    }

    const urlRegExp = /(http(s)?:\/\/.)[-a-zA-Z0-9%:._]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9_.?&/]*)/gm;
    if (!urlRegExp.test(formData.posterUrl)) {
      validationResult.errors.push('Invalid poster url.');
    }

    if (validationResult.errors.length) {
      validationResult.isValid = false;
    }

    return validationResult;
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { history, fetchUpdateMovie, activeMovieData, match } = this.props;
    const validationResult = this.validateForm(activeMovieData);

    if (!validationResult.isValid) {
      this.setState({
        errors: [...validationResult.errors]
      });
    } else {
      this.setState({
        errors: []
      });

      fetchUpdateMovie(Number(match.params.id), {
        ...activeMovieData,
      });

      history.push(`/movie/${match.params.id}`);
    }
  };

  goBackHandler = () => {
    const { history, match } = this.props;

    history.push(`/movie/${match.params.id}`)
  };

  render() {
    const { activeMovieData } = this.props;

    if (!activeMovieData) {
      return <Spinner/>
    } else {
      const { title, posterUrl, director, genres, description } = activeMovieData;

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
                changeHandler={(event) => this.inputChangeHandler(event, 'title')} />
              <CustomInput
                type='url'
                label='Poster URL:'
                placeholder='url'
                id='poster'
                value={posterUrl}
                required={true}
                changeHandler={(event) => this.inputChangeHandler(event, 'posterUrl')} />
              <CustomInput
                type='text'
                label='Director:'
                placeholder='director'
                id='director'
                value={director}
                required={true}
                changeHandler={(event) => this.inputChangeHandler(event, 'director')} />
              <CustomInput
                type='text'
                label='Genres:'
                placeholder='type genres divided by any separator, except whitespace'
                id='genres'
                value={genres.join(',')}
                required={true}
                changeHandler={this.genresChangeHandler} />
              <CustomTextarea
                label='Description:'
                placeholder='description'
                id='description'
                value={description}
                required={true}
                changeHandler={(event) => this.inputChangeHandler(event, 'description')} />
              <div className={styles.ButtonsContainer}>
                <CustomButton
                  type='submit'
                  value='Submit'
                  clickHandler={this.submitHandler} />
                <CustomButton
                  type='button'
                  value='Go back'
                  clickHandler={this.goBackHandler} />
              </div>
              <div className={styles.ErrorsContainer}>
                { this.state.errors.join(' ') }
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  activeMovieData: activeMovieDataSelector(state),
});

const mapDispatchToProps = {
  fetchUpdateMovie,
  fetchMovieById,
  activeMovieDataUpdated
};

EditMoviePage.propTypes = {
  activeMovieData: PropTypes.shape(propTypesShapes.MOVIE),
  fetchUpdateMovie: PropTypes.func.isRequired,
  fetchMovieById: PropTypes.func.isRequired,
  activeMovieDataUpdated: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMoviePage);
