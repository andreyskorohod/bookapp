import React, {Component} from 'react'
import text from '../config.json';

class Booklist extends Component{
  render() {
    return (
      <div className='aboutbook'>
        {text.greetText}
      </div>
    );
  }
}

export default Booklist
