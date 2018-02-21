import React from 'react';
import './bookInfo.css';
import Like from '../like/Like';
import BookDetails from '../bookDetails/BookDetails';

export default class BookInfo extends React.Component {
  render() {
    return (
      <div className="BookInfo-div">
        <div><img src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg" /></div>
        <Like id={this.props.id} />
        <BookDetails title={this.props.title} rating={this.props.rating} author={this.props.author} />
      </div>
    );
  }
}
