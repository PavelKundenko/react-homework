import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actorsDataSelector } from '../../redux/movies/movies.selectors';
import { propTypesShapes } from '../../constants';
import styles from './ActorPage.module.scss';

const ActorPage = ({ match, actors }) => {
  const actorId = Number(match.params.id);
  const { name, imgUrl, biography } = actors.find((actor) => actor.id === actorId);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className={`${styles.actorInfoContainer} col-md-6`}>
          <h2>{name}</h2>
          <img className={styles.actorPortrait} src={imgUrl} alt="Author portrait" />
          <p className={styles.actorBiography}>{biography}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  actors: actorsDataSelector(state)
});

ActorPage.propTypes = {
  actors: PropTypes.arrayOf(propTypesShapes.ACTOR)
};

export default connect(mapStateToProps)(ActorPage);
