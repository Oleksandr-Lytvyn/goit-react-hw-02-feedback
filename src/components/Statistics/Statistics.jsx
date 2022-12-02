import React from 'react';

export class Statistics extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <p>
            Good:<span>{this.props.good}</span>
          </p>
          <p>
            Neutral:<span>{this.props.neutral}</span>
          </p>
          <p>
            Bad:<span>{this.props.bad}</span>
          </p>
          <p>
            Total:<span>{this.props.total}</span>
          </p>
          <p>
            Positive feedback:
            <span>{this.props.positivePercentage}</span>
          </p>
        </li>
      </ul>
    );
  }
}
