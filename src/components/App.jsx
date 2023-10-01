import React, { Component } from 'react';
import FeedbackOptions from './Feedbacks/Feedbacks';
import Statistics from './Statisticks/Statisticks';
import Section from './Section/Section';
import 'bulma/css/bulma.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  handleResetFeedback = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  onClickResetForm = (event) => {
    const { name } = event.target;
    if (name !== "good" && name !== "neutral" && name !== "bad") {
      this.setState({
        good: 0,
        neutral: 0,
        bad: 0
      });
    }
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className='container content'

      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleLeaveFeedback}
            onResetFeedback={this.handleResetFeedback}
          />
        </Section>
        <Section >

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onClick={this.onClickResetForm}
          />
        </Section>
      </div>
    );
  }
}





