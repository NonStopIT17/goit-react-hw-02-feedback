import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import './Feedback.modyle.css';

class Section extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.props;
    const positive = Math.round((good * 100) / this.countTotalFeedback());
    return Number.isNaN(positive) ? 0 : positive;
  };

  render() {
    const { good, neutral, bad, onLeaveFeedback } = this.props;

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
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Section;
