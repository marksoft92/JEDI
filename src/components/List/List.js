import React from 'react';
import styles from '../List/List.scss';
import {listData} from '../../data/dataStore';
class List extends React.Component {
  render() {
    return (
        <h2 className={styles.title}>{listData.title}</h2>
    )
  }
}

export default List;
