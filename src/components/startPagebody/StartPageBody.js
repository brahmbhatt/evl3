import React from 'react';
import './startPageBody.css';

export default class StartPageBody extends React.Component {
  render() {
    return (
      <div className="StartPageBody-div">
        <div className="StartPageBody-self">the book-self</div>
        <div className="StartPageBody-mainDiv">
          <p>Ops No Books Found!</p>
          <p> import them now</p>
          <button onClick={this.props.getBooks}><img
            className="image"
            src="file:///Users/margibrahmbhatt/Downloads/refre.png"
          />
          </button>
        </div>
      </div>
    );
  }
}
