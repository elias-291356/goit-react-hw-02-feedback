import React from 'react';

export default function Statistics({ good, neutral, bad, onClick }) {
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <form onClick={onClick} >
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive:{positivePercentage}%</li>
      </ul>
    </form >
  )
}