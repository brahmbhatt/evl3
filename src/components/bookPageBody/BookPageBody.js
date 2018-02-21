import React from 'react';
import { connect } from 'react-redux';
import './bookPageBody.css';
import BookInfo from '../bookInfo/BookInfo';


class BookPageBody extends React.Component {
  getBookInfo = () => {
    const arr = [];
    for (let i = 0; i < this.props.booksArray.length; i += 1) {
      console.log('inside loop');

      arr.push(<BookInfo id={this.props.booksArray[i].bookId} title={this.props.booksArray[i].Name} rating={this.props.booksArray[i].rating} author={this.props.booksArray[i].Author} />);
    }
    return arr;
  }
  render() {
    return (
      <div className="BookPageBody-div">
        <div className="BookPageBody-self">the book-self</div>
        {this.getBookInfo()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  booksArray: state.reducer.booksArray,
  likesArray: state.reducer.likesArray,
});
export default connect(mapStateToProps, null)(BookPageBody);

