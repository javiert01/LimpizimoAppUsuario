import api from '../../api';
import { GET_PLACES, SET_SELECTED_PLACE } from './actionTypes';

export const getPlaces = userId => dispatch => {
  api
    .get(`usuario/${userId}/domicilios`)
    .then(res => {
      dispatch({ type: GET_PLACES, payload: res.data });
    })
    .catch(err => {
      console.log('xxxErr', err);
    });
};

export const setSelectedPlace = place => dispatch => {
  dispatch({ type: SET_SELECTED_PLACE, payload: place });
};
