import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import 'bootstrap/dist/css/bootstrap.css';

class Homepage extends Component{
  render() {
    return (
        <div className="container">
            <div className='homepage'>
                <ul className="row">
                    <li className="col-xs-12"><Link to="books/">See all books</Link></li>
                    <li className="col-xs-12"><Link to="authors/">See all authors</Link></li>
                </ul>
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

export default connect(mapStateToProps)(Homepage)
