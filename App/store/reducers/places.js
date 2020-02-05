import { GET_PLACES } from '../actions/actionTypes';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACES:
      return { ...state, places: action.payload };
    default:
      return state;
  }
};
