import React from 'react';

export class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              this.props.options.incGood();
            }}
          >
            good
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              this.props.options.incNeutral();
            }}
          >
            neutral
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              this.props.options.incBad();
            }}
          >
            bad
          </button>
        </li>
      </ul>
    );
  }
}
