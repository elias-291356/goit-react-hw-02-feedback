
import React from 'react';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className='btn-wrap'>
      <button
        className="button is-primary"
        onClick={() => onLeaveFeedback('good')}>Good</button>
      <button
        className="button is-warning"
        onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button
        className="button is-danger"
        onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
}