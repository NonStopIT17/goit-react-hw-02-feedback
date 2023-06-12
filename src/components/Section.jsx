import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import './Feedback/Feedback.modyle.css';

class Section extends Component {
  render() {
    const {
      good,
      neutral,
      bad,
      totalFeedback,
      positiveFeedbackPercentage,
      onLeaveFeedback
    } = this.props;

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
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Section;