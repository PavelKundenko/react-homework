import React from 'react';
import { connect } from 'react-redux';

import engLanguagePack from '../../intl/en.json';
import uaLanguagePack from '../../intl/ua.json';
import { localizationSelector } from '../../redux/movies/movies.selectors';
import { languageShortages } from '../../constants';

const WithTranslation = (WrappedComponent, name) => {
  const mapStateToProps = (state) => ({
    currentLocalization: localizationSelector(state)
  });

  const localizations = {
    [languageShortages.ENGLISH]: engLanguagePack,
    [languageShortages.UKRAINIAN]: uaLanguagePack
  };

  const ComponentWithTranslation = ({ currentLocalization, ...otherProps }) => {
    return (
      <WrappedComponent localizationData={localizations[currentLocalization][name]} {...otherProps} />
    )
  };

  return connect(mapStateToProps)(ComponentWithTranslation);
};

export default WithTranslation;



