import React from 'react';
import { connect } from 'react-redux';
import StartPage from '../startPage/StartPage';
import saveBooks from '../../redux/actions/saveBooks';
import BookPage from '../../components/bookPage/BookPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }
  componentWillMount = () => {
    fetch('http://localhost:3000/books/ispresent').then(data => data.text())
      .then((data) => {
        if (data === '0') {
          this.setState({ page: 0 });
        } else {
          this.setState({ page: 1 });
          this.getBooksOnBookPage();
        }
      });
  }
  getBooks = () => {
    console.log('getbooks called!');
    fetch('http://localhost:3000/books/savebooks', {
      method: 'POST',
    }).then(response => response.json())
      .then(data => console.log(data))
      .then(() => {
        fetch('http://localhost:3000/books/getbooks')
          .then(response => response.json())
          .then((data) => {
            console.log('in didmount, data:', data);
            this.props.saveBooks(data);
            console.log('stores data:', this.props.booksArray);
            this.setState({ page: 1 });
          });
      });
  }
  getBooksOnBookPage = () => {
    fetch('http://localhost:3000/books/getbooks')
      .then(response => response.json())
      .then((data) => {
        console.log('in didmount, data:', data);
        this.props.saveBooks(data);
        console.log('stores data:', this.props.booksArray);
      });
  }
  render() {
    if (this.state.page === 0) {
      return (
        <StartPage getBooks={this.getBooks} />
      );
    }
    return (
      <BookPage />
    );
  }
}
const mapDispatchToProps = dispatch => ({
  saveBooks: data => dispatch(saveBooks(data)),

});
const mapStateToProps = state => ({
  booksArray: state.reducer.booksArray,
  likesArray: state.reducer.likesArray,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
