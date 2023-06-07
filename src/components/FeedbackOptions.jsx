import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className="feedback">
        <div className="feedback__btn--add">
          <h1 className="feedback__btn--title">Please leave feedback</h1>
          <ul className="feedback__btn--list">
            {options.map((elm) => (
              <li className="feedback__btn--item" key={elm}>
                <button
                  className="feedback__btn--btn"
                  onClick={(evt) => onLeaveFeedback(evt.target.textContent)}
                >
                  {ucFirst(elm)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

