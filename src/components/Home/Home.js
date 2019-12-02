import React from 'react';
import List from '../List/List';
import styles from './Home.scss';
import { pageContents,listData } from '../../data/dataStore';
import Power from '../Power/Power'
class Home extends React.Component {
  render() {
    return (
        <section className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <List {...listData}/> 
          <Power/> 
            </section>
    
    ) }
}

export default Home;
