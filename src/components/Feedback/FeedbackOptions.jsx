import PropTypes from 'prop-types';
import React from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  function ucFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="feedback">
      <div className="feedback__btn--add">
        <h1 className="feedback__btn--title">Please leave feedback</h1>
        <ul className="feedback__btn--list">
          {options.map((elm) => (
            <li className="feedback__btn--item" key={elm}>
              <button
                className="feedback__btn--btn"
                onClick={() => onLeaveFeedback(elm)}
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

