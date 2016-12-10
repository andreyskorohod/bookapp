import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default connect(mapStateToProps)(React.createClass({
  render() {
    var allBooks = this.props.booklist;
    var currentID = this.props.params.authorID;
    var authorBookList = [];
    allBooks.map(function(item){
        if (item.author.authorID == currentID) authorBookList.push(item);
    })

    return (
        <div className="container">
            <div className="authorInfo">
                <div className="row">
                    <div className="col-xs-12 author">
                        {authorBookList[0].author.name}
                    </div>
                    <div className="col-xs-12 biography">
                        {authorBookList[0].author.biography}
                    </div>
                    <div className="authorBooklist">
                        <p className="col-xs-12 authBooks">Books:</p>
                        {
                            authorBookList.map(function(item){
                                return <Link to={`/books/${item.book.bookID}`} key={item.book.bookID} className="col-xs-12 booktitle">{item.book.booktitle}</Link>
                            })
                        }
                    </div>
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
