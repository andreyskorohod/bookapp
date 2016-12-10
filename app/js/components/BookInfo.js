import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default connect(mapStateToProps)(React.createClass({
  render() {
    var allBooks = this.props.booklist;
    var currentID = this.props.params.bookID;
    var currentBook = {};
    allBooks.map(function(item){
        if (item.book.bookID == currentID) currentBook = item;
    })

    return (
        <div className="container">
            <div className="bookInfo">
                <div className="row">
                    <p className="col-xs-12 abouttitle">About Book</p>
                    <p className="col-xs-12 booktitle">{ currentBook.book.booktitle }</p>
                    <Link to={`/authors/${currentBook.author.authorID}`} className="col-xs-12 author">Author: { currentBook.author.name }</Link>
                    <Link to={`/genre/${currentBook.book.genre}`} className="col-xs-12 genre">Genre: { currentBook.book.genre }</Link>
                    <p className="col-xs-12 description">Description: { currentBook.book.description }</p>
                    <Link to="/" className="homepageButton col-xs-12" >homepage</Link>
                </div>
            </div>
        </div>
    )
  }
})
)

function mapStateToProps (state) {
  return {
    booklist: state.booklist
  }
}
