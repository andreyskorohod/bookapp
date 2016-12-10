import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import BookItem from './BookItem';

var Authorlist = React.createClass({

  createAuthorList(books) {
      var authors = [];
      var f_authors = [];
      books.map(function(el) {
          authors.push(el.author);
      });

      f_authors.push(authors[0]);
      for (var i = 1; i < authors.length; i++)
          if (authors[i].authorID != authors[i-1].authorID) f_authors.push(authors[i]);

      return f_authors;
  },

  render() {
    var allBooks = this.props.booklist;
    var authors = this.createAuthorList(allBooks);
    return (
        <div className="container">
            <div className="authorList">
                <div className="row">

                    <p className="col-xs-12 pagetitle">Authors</p>
                    {
                        authors.map(function(el) {
                            return <Link key={el.authorID} to={`/authors/${el.authorID}`} className="col-xs-12 author">{el.name}</Link>
                        })
                    }
                    <Link to="/" className="homepageButton col-xs-12" >homepage</Link>
                </div>
            </div>
        </div>

    );
  }
})

function mapStateToProps (state) {
  return {
    booklist: state.booklist
  }
}

export default connect(mapStateToProps)(Authorlist)
