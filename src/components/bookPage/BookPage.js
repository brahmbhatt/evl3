import React from 'react';
import './bookPage.css';
import SideBar from '../sideBar/SideBar';
import BookPageBody from '../bookPageBody/BookPageBody';

export default class BookPage extends React.Component {
  render() {
    return (
      <div className="startpage-div">
        <SideBar />
        <BookPageBody />
      </div>
    );
  }
}
