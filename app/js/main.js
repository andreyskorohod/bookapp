import React from 'react';
import {render} from 'react-dom';
import AuthorInfo from './components/AuthorInfo';
import Authorlist from './components/Authorlist';
import BookInfo from './components/BookInfo';
import BookItem from './components/BookItem';
import Booklist from './components/Booklist';
import Homepage from './components/Homepage.js';
import GenreList from './components/GenreList.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import bookStore from './store/bookStore'

require("../stylesheets/main.less");
require("../stylesheets/booklist/homepage.less");
require("../stylesheets/booklist/booklist.less");
require("../stylesheets/booklist/bookinfo.less");
require("../stylesheets/booklist/authorinfo.less");
require("../stylesheets/booklist/authorlist.less");
require("../stylesheets/booklist/genre.less");

const store = bookStore();

InitialState:
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Homepage} />
            <Route path="/books/" component={Booklist} />
            <Route path="/books/:bookID" component={BookInfo} />
            <Route path="/authors/" component={Authorlist} />
            <Route path="/authors/:authorID" component={AuthorInfo} />
            <Route path="/genre/:genre" component={GenreList} />
        </Router>
    </Provider>,
document.getElementById('root'))

// render(<Booklist />, document.getElementById('root'));
