import React from 'react';
import { connect } from 'react-redux';
import './Like.css';

export default class Like extends React.Component {
  likeBook = () => {
    fetch(`http://localhost:3000/books/like/${this.props.id}`, {
      method: 'POST',
    }).then(response => response.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <button
        className="Like-button"
        onClick={(event) => {
        this.likeBook();
        event.target.className = 'redButton';
      }}
      />
    );
  }
}
// const mapStateToProps = state => ({
//   booksArray: state.reducer.booksArray,
//   likesArray: state.reducer.likesArray,
// });
// export default connect(mapStateToProps, null)(BookPageBody);
