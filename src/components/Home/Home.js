import React from 'react';
import List from '../List/List';
import styles from './Home.scss';
import { pageContents, listData } from '../../data/dataStore';

class Home extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />

      </section>

    )
  }
}

export default Home;
