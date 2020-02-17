import { SET_ASSIGNED_EMPLOYEE } from '../actions/actionTypes';

const initialState = {
  assignedEmployee: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ASSIGNED_EMPLOYEE:
      return { ...state, assignedEmployee: action.payload };
    default:
      return state;
  }
};
