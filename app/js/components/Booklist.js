import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BookItem from './BookItem';

class Booklist extends Component{
    render() {
        var allBooks = this.props.booklist;
        return (
            <div className="container">
                <div className='aboutbook'>
                    <div className="row">
                        <div className="pagetitle col-xs-12">Choose a book</div>
                    </div>
                    {
                        allBooks.map(function(el) {
                            return <BookItem key={el.book.bookID} book={el.book} author={el.author} />
                        })
                    }
                    <div className="row">
                        <Link to="/" className="backButton col-xs-12" >homepage</Link>
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

export default connect(mapStateToProps)(Booklist)
