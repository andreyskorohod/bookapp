import React, {Component} from 'react'
import { Link } from 'react-router'

class BookItem extends Component{
  render() {
    return (
        <div className='bookrow'>
            <div className="row">
                <Link to={`/books/${this.props.book.bookID}`} className="booktitle col-xs-12" >{this.props.book.booktitle}</Link>
                <Link to={`/authors/${this.props.author.authorID}`} className="author col-xs-12">{this.props.author.name}</Link>
            </div>
        </div>
    )
  }
}

export default BookItem
