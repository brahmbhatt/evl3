import React from 'react';
import './startpage.css';
import SideBar from '../sideBar/SideBar';
import StartPageBody from '../startPagebody/StartPageBody';

export default class startpage extends React.Component {
  render() {
    return (
      <div className="startpage-div">
        <SideBar />
        <StartPageBody getBooks={this.props.getBooks} />
      </div>
    );
  }
}
