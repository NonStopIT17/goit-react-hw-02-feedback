import PropTypes from 'prop-types';
import React from 'react';

export default class Statistics extends React.Component {
  render() {
    const {
      good,
      neutral,
      bad,
      total,
      positivePercentage
    } = this.props;

    return (
      <div key="feedback__stats" className="feedback__stats">
        {total > 0 ? (
          <>
            <h2 className="feedback__stats--title">Statistics</h2>
            <ul className="feedback__stats--list">
              <li className="feedback__stats--item">
                <p className="feedback__stats--stat">Good: {good}</p>
              </li>
              <li className="feedback__stats--item">
                <p className="feedback__stats--stat">Neutral: {neutral}</p>
              </li>
              <li className="feedback__stats--item">
                <p className="feedback__stats--stat">Bad: {bad}</p>
              </li>
              <li className="feedback__stats--item">
                <p className="feedback__stats--stat">Total: {total}</p>
              </li>
              <li className="feedback__stats--item">
                <p className="feedback__stats--stat">
                  Positive feedback: {positivePercentage}%
                </p>
              </li>
            </ul>
          </>
        ) : (
          <p>no feedback given</p>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};


