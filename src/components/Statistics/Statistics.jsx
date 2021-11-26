import PropTypes from 'prop-types';
import React from 'react';
import styles from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}

      <ul className={styles.StatList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.StatListItem} key={id} style={{backgroundColor: randomColor()}}>
            <span className={styles.Label}>{label}</span>
            <span className={styles.Percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);
