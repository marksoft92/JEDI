import React from 'react';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import styles from '../Status/Status.scss';

const Status = () => (
  <section >    <h2 className={styles.title}>Total Power :</h2>
  <div className={styles.component}>
   <div className={styles.cards}>
       <img src='src/img/light.png'></img>
        <h3 className={styles.title}>Kw</h3>    
   </div>
   <div className={styles.cards}>
       <img src='src/img/milenium.png'></img>
        <h3 className={styles.title}>Kw</h3>
   </div>
   </div>
    <Footer/>
    </section>
 
 

);

export default Status;