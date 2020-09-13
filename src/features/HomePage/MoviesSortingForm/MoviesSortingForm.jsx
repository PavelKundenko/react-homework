import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";

import styles from './MoviesSortingForm.module.scss';
import {searchValueChanged, sortByLikes, sortByRating, resetSorting} from "../../../redux/homepage/homepage.actions";

const MoviesSortingForm = ({ searchFieldValueChanged, sortByLikes, sortByRating, resetSorting }) => {
  return (
    <form className={styles.SortMoviesForm}>
      <div>
        <h2>Sort movies</h2>
        <CustomButton value="By likes" clickHandler={sortByLikes} />
        <CustomButton value="By rating" clickHandler={sortByRating} />
        <CustomButton value="Reset" clickHandler={resetSorting} />
      </div>
      <CustomInput
        type="text"
        changeHandler={searchFieldValueChanged}
        placeholder="Enter movie title"
      />
    </form>
  )
};

const mapDispatchToProps = {
  searchFieldValueChanged: (event) => searchValueChanged(event.target.value),
  sortByLikes,
  sortByRating,
  resetSorting
};

MoviesSortingForm.propTypes = {
  searchFieldValueChanged: PropTypes.func.isRequired,
  sortByLikes: PropTypes.func.isRequired,
  sortByRating: PropTypes.func.isRequired,
  resetSorting: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MoviesSortingForm);
