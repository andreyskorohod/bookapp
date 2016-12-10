import books from '../../config.json';

const initialState = {
    booklist: books
};

export default function userstate(state = initialState) {
  return state;
}
