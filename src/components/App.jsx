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

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </div>
    );
  }
}

