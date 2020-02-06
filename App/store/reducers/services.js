import { ASK_FOR_SERVICE } from '../actions/actionTypes';

const initialState = {
  askForService: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASK_FOR_SERVICE:
      return { ...state, askForService: action.payload };
    default:
      return state;
  }
};

export default reducer;
