import React from 'react';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions(props) {
  return (
    <ul className={css.buttons_list}>
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
