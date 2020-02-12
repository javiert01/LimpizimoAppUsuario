import api from '../../api';
import { ASK_FOR_SERVICE, SET_IS_SERVICE_ASSIGNED } from './actionTypes';

export const askForService = service => dispatch => {
  api
    .post('servicio/crear', service)
    .then(res => {
      console.log('xxxRes', res);
      dispatch({ type: ASK_FOR_SERVICE, payload: res.data });
    })
    .catch(err => {
      console.log('xxxErr', err);
    });
};

export const setIsServiceAssigned = (isServiceAssigned) => {
  return {
      type: SET_IS_SERVICE_ASSIGNED,
      isServiceAssigned: isServiceAssigned
  }
}
