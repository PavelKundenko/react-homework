import React,  { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner/Spinner';
import WithTranslation from '../../hocs/WithTranslation/WithTranslation';
import EditMovieForm from './EditMovieForm/EditMovieForm';
import { activeMovieDataUpdated } from '../../redux/movies/movies.actions';
import { fetchUpdateMovie, fetchMovieById } from '../../redux/movies/movies.async.actions';
import { isMoviesLoadingSelector } from '../../redux/movies/movies.selectors';

class EditMoviePage extends Component  {
  componentDidMount() {
    const { match, fetchMovieById } = this.props;

    fetchMovieById(Number(match.params.id));
  }

  state = {
    errors: []
  };

  validateForm = (formData) => {
    const validationErrors = [];
    const urlRegExp = /(http(s)?:\/\/.)[-a-zA-Z0-9%:._]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9_.?&/]*)/gm;

    if (formData.title.length < 3) {
      validationErrors.push('Invalid title.')
    } else if (!urlRegExp.test(formData.posterUrl)) {
      validationErrors.push('Invalid poster url.');
    }

    return validationErrors;
  };

  submitHandler = (formData) => {
    const { history, fetchUpdateMovie, match } = this.props;
    const validationErrors = this.validateForm(formData);

    if (validationErrors.length) {
      this.setState({
        errors: [...validationErrors]
      });
    } else {
      this.setState({
        errors: []
      });

      fetchUpdateMovie(Number(match.params.id), {
        ...formData,
      });

      history.push(`/movie/${match.params.id}`);
    }
  };

  render() {
    const { isActiveDataLoading, localizationData } = this.props;

    if (isActiveDataLoading) {
      return <Spinner/>
    } else {
      return (
        <EditMovieForm localizationData={localizationData} onSubmit={this.submitHandler} errors={this.state.errors} />
      );
    }
  }
}

EditMoviePage.propTypes = {
  fetchUpdateMovie: PropTypes.func.isRequired,
  fetchMovieById: PropTypes.func.isRequired,
  activeMovieDataUpdated: PropTypes.func.isRequired,
  isActiveDataLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isActiveDataLoading: isMoviesLoadingSelector(state)
});

const mapDispatchToProps = {
  fetchUpdateMovie,
  fetchMovieById,
  activeMovieDataUpdated
};

const withConnect = connect(mapStateToProps, mapDispatchToProps)(EditMoviePage);

export default WithTranslation(withConnect, EditMoviePage.name);
