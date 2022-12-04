import React from 'react';

export function FeedbackOptions(props) {
  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={() => {
            props.options.incGood();
          }}
        >
          good
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            props.options.incNeutral();
          }}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => {
            props.options.incBad();
          }}
        >
          bad
        </button>
      </li>
    </ul>
  );
}
