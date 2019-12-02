import React from 'react';

import Footer from '../Footer/Footer';
import styles from '../Status/Status.scss';
import PropTypes from 'prop-types';
class Status extends React.Component {
    static propTypes = {
        falcon: PropTypes.number,
    lightsaber: PropTypes.number,
      }
    render() {
        const {falcon,lightsaber}= this.props.power;
        const suma = falcon+lightsaber;
      
        return (
  <section >    
        <h2 className={styles.title}>Total Power :{suma}</h2>
            <div className={styles.component}>
                <div className={styles.cards}>
                    <img className={styles.imgstatus} src='src/img/light.png'></img>
        <h3 className={styles.title}>{lightsaber}Kw</h3>    
                </div>
                <div className={styles.cards}>
                    <img className={styles.imgstatus} src='src/img/milenium.png'></img>
        <h3 className={styles.title}>{falcon} Kw</h3>
                </div>
            </div>
    <Footer/>
    </section>
        );
 

        }
}
export default Status;