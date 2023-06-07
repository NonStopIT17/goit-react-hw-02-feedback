import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import './Feedback.modyle.css';

const Section = ({ good, neutral, bad, onLeaveFeedback }) => {
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good * 100) / countTotalFeedback());
    return Number.isNaN(positive) ? 0 : positive;
  };

  return (
    <div>
      <FeedbackOptions
        key="optionsFeeb"
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'neutral', 'bad']}
      />
      <Statistics
        key="statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default Section;
