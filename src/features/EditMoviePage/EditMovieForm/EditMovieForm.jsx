import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomTextarea from '../../../components/CustomTextarea/CustomTextarea';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { activeMovieDataSelector } from '../../../redux/movies/movies.selectors';
import { propTypesShapes } from '../../../constants';
import styles from './EditMovieForm.module.scss';

const EditMovieForm = ({ localizationData, handleSubmit, errors }) =>  (
  <div className='container'>
    <div className='row justify-content-center'>
      <form className='col-lg-7 col-md-10' onSubmit={handleSubmit}>
        <Field
          name='title'
          component={CustomInput}
          props={{
            type: 'text',
            label: `${localizationData.titleLabel}:`,
            placeholder: `${localizationData.titlePlaceholder}`,
            id: 'title',
            // value: title,
            required: true
          }} />
        <Field
          name='posterUrl'
          component={CustomInput}
          props={{
            type: 'url',
            label: `${localizationData.posterUrlLabel}:`,
            placeholder: `${localizationData.posterUrlPlaceholder}`,
            id: 'poster',
            // value: posterUrl,
            required: true,
          }} />
        <Field
          name='director'
          component={CustomInput}
          props={{
            type: 'text',
            label: `${localizationData.directorLabel}:`,
            placeholder: `${localizationData.directorPlaceholder}`,
            id: 'director',
            // value: director,
            required: true
          }} />
        <Field
          name='genres'
          component={CustomInput}
          props={{
            type: 'text',
            label: `${localizationData.genresLabel}:`,
            placeholder: `${localizationData.genresPlaceholder}`,
            id: 'genres',
            // value: genres.join(','),
            required: true
          }} />
        <Field
          name='description'
          component={CustomTextarea}
          props={{
            type: 'text',
            label: `${localizationData.descriptionLabel}:`,
            placeholder: `${localizationData.descriptionPlaceholder}`,
            id: 'description',
            // value: description,
            required: true
          }} />
        <div className={styles.ButtonsContainer}>
          <CustomButton type='submit' value={localizationData.buttonSubmit} />
          <CustomButton type='button' value={localizationData.buttonGoBack} />
        </div>
        <div className={styles.ErrorsContainer}>
          { errors.join(' ') }
        </div>
      </form>
    </div>
  </div>
);

EditMovieForm.propTypes = {
  localizationData: PropTypes.shape(propTypesShapes.LOCALIZATION_DATA),
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

const withReduxForm = reduxForm({
  form: 'EditMovieForm'
})(EditMovieForm);

const mapStateToProps = (state) => ({
  initialValues: activeMovieDataSelector(state)
});

const withConnect = connect(mapStateToProps)(withReduxForm);

export default withConnect;
