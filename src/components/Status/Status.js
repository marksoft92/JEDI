import React from 'react';

import Footer from '../Footer/Footer';
import styles from '../Status/Status.scss';
import PropTypes from 'prop-types';
class Status extends React.Component {
  state = { step: 0 };
  static propTypes = {
    falcon: PropTypes.number,
    lightsaber: PropTypes.number,
  }
  render() {
    const { falcon, lightsaber } = this.props.power;
    const suma = falcon + lightsaber;



    function Powerstats() {
      if (falcon == 0) {
        {
          return (
            falcon == 0 && <div className={styles.cards}>
              <img className={styles.imgstatusrevers} src='src/img/milenium.png' ></img>
              <h3 className={styles.title}>{falcon} Kw</h3>
            </div>);
        }
      }
      return (<div className={styles.cards}>
        {
          falcon != 0 && <div className={styles.cards}>
            <img className={styles.imgstatus} src='src/img/milenium.png' ></img>
            <h3 className={styles.title}>{falcon} Kw</h3>

          </div>

        }</div>
      );
    }

    function PowerStatsLightSaber() {
      if (lightsaber == 0) {
        {
          return (
            lightsaber == 0 && <div className={styles.cards}>
              <img className={styles.imgstatusrevers} src='src/img/light.png' ></img>
              <h3 className={styles.title}>{lightsaber} Kw</h3>
            </div>);
        }
      }
      return (<div className={styles.cards}>
        {
          lightsaber != 0 && <div className={styles.cards}>
            <img className={styles.imgstatus} src='src/img/light.png' ></img>
            <h3 className={styles.title}>{lightsaber} Kw</h3>

          </div>

        }</div>
      );
    }


    return (
      <section >

        <h2 className={styles.title}>Total Power :{suma}</h2>
        <div className={styles.component}>
          < PowerStatsLightSaber lightsaber />
          <Powerstats falcon />

        </div>
        <Footer />
      </section>
    );


  }
}
export default Status;