import React from 'react';
import styles from './Column.scss'

import PropTypes from 'prop-types';
class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
      }
  static propTypes = {

    title: PropTypes.node,
    cards: PropTypes.array,
  }
  render() {
    const {cards,title,} = this.props;
    return (
        <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cards}>
           {this.state.cards.map(({key, ...cardProps}) => (
               <Column key={key} {...cardProps} />
               ))}
           </div>
        </section>
    )
  }
}

export default Column;
