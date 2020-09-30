import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import WithTranslation from '../../../hocs/WithTranslation/WithTranslation';
import { searchValueChanged, sortByLikes, sortByRating, resetSorting } from '../../../redux/movies/movies.actions';
import { propTypesShapes } from '../../../constants';
import styles from './MoviesSortingForm.module.scss';

const MoviesSortingForm = ({ searchFieldValueChanged, sortByLikes, sortByRating, resetSorting, localizationData }) => {
  return (
    <form className={styles.sortMoviesForm}>
      <div>
        <h2>{localizationData.headline}</h2>
        <CustomButton value={localizationData.buttonByLikes} clickHandler={sortByLikes} />
        <CustomButton value={localizationData.buttonByRating} clickHandler={sortByRating} />
        <CustomButton value={localizationData.buttonReset} clickHandler={resetSorting} />
      </div>
      <div className='col-lg-5 col-md-7 col-sm-10'>
        <CustomInput
          type="text"
          onChange={searchFieldValueChanged}
          placeholder={localizationData.searchFieldPlaceholder} />
      </div>
    </form>
  )
};

MoviesSortingForm.propTypes = {
  searchFieldValueChanged: PropTypes.func.isRequired,
  sortByLikes: PropTypes.func.isRequired,
  sortByRating: PropTypes.func.isRequired,
  resetSorting: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  searchFieldValueChanged: (event) => searchValueChanged(event.target.value),
  sortByLikes,
  sortByRating,
  resetSorting
};

const withConnect = connect(null, mapDispatchToProps)(MoviesSortingForm);

export default WithTranslation(withConnect, MoviesSortingForm.name);
