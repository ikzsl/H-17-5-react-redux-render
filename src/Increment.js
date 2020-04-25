import React from 'react';

export default class Increment extends React.Component {
  handleClick = () => {
    const { dispatch, increment } = this.props;
    console.log(dispatch, increment);
    dispatch(increment());

  };

  render() {
    const { dispatch, increment } = this.props;
    console.log(dispatch, increment);
    const { count } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>{count}</button>
      </div>
    );
  }
}
