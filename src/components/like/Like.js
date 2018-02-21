import React from 'react';
import { connect } from 'react-redux';
import './Like.css';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'Like-button',
    };
  }
  likeBook = () => {
    fetch(`http://localhost:3000/books/like/${this.props.id}`, {
      method: 'POST',
    }).then(response => response.json())
      .then(data => console.log(data));
  }
  changeButtonColor = () => {
    for (let i = 0; i < this.props.likesArray.length; i += 1) {
      if (this.props.likesArray[i].bookId === this.props.id) {
        if (this.props.likesArray[i].like === 'true') {
          console.log('yes it is true');

          this.setState({ color: 'redButton' });
        }
      }
    }
  }
  render() {
    return (
      <button

        className={this.state.color}
        onClick={(event) => {
        this.likeBook();
        event.target.className = 'redButton';
      }}
      >{this.changeButtonColor}
      </button>
    );
  }
}
const mapStateToProps = state => ({
  booksArray: state.reducer.booksArray,
  likesArray: state.reducer.likesArray,
});
export default connect(mapStateToProps, null)(Like);
