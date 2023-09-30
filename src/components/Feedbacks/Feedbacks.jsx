import { Component } from "react";



export class Feedbacks extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handelClick = (event) => {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }));
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
    this.countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    }

    this.countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
    }

    const { good, neutral, bad } = this.state;
    return (
      <form onClick={this.onClickResetForm}>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handelClick}  >good</button>
        <button type="button" name="neutral" onClick={this.handelClick}  >neutral</button>
        <button type="button" name="bad" onClick={this.handelClick}  >bad</button>
        <h2>Statisticks</h2>
        <ul>
          <li>good: {good} </li>
          <li>neutral:{neutral}</li>
          <li>bad: {bad} </li>
          <li>Total: {this.countTotalFeedback()} </li>
          <li>Positive %: {this.countPositiveFeedbackPercentage()} </li>
        </ul>
      </form>
    )
  }
}