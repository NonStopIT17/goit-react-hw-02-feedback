import React, { Component } from 'react';
import Section from './Section';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  onLeaveFeedback = value => {
    const nameStat = value.toLowerCase();
    this.setState(prevState => ({
      [nameStat]: prevState[nameStat] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = Math.round((good * 100) / this.countTotalFeedback());
    return Number.isNaN(positive) ? 0 : positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </div>
    );
  }
}


