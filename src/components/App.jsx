import React, { useState } from 'react';
import Section from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {
    const nameStat = value.toLowerCase();
    switch (nameStat) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={onLeaveFeedback}
      />
    </div>
  );
};
