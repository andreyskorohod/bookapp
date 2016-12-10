import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BookItem from './BookItem';

class GenreList extends Component{
  render() {
    var allBooks = this.props.booklist;
    var genre = this.props.params.genre;
    return (
        <div className="container">
            <div className='genreitems'>
                <p className="genretitle">Books in {genre} genre</p>
                {
                    allBooks.map(function(el) {
                      if (el.book.genre == genre)
                        return <BookItem key={el.book.bookID} book={el.book} author={el.author} />
                    })
                }
                <div className="row">
                    <Link to="/" className="homepageButton col-xs-12" >homepage</Link>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    booklist: state.booklist
  }
}

export default connect(mapStateToProps)(GenreList)
