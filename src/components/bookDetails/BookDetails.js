import React from 'react';
import './bookDetails.css';

export default class BookDetails extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.rating}</div>
        <div>{this.props.author}</div>
      </div>
    );
  }
}
