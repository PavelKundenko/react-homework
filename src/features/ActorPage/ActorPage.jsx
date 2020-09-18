import React from "react";
import { connect } from 'react-redux';

import styles from './ActorPage.module.scss';
import {actorsDataSelector} from "../../redux/movies/movies.selectors";

const ActorPage = ({ match, actors }) => {
  const actorId = Number(match.params.id);
  const { name, imgUrl, biography } = actors.find((actor) => actor.id === actorId);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2>{name}</h2>
          <img className={styles.actorPortrait} src={imgUrl} alt="Author portrait" />
          <p>{biography}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  actors: actorsDataSelector(state)
});

export default connect(mapStateToProps)(ActorPage);
