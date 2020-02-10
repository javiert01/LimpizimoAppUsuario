import api from '../../api';
import { ASK_FOR_SERVICE } from './actionTypes';

export const askForService = service => dispatch => {
  api
    .post('servicio/crear', service)
    .then(res => {
      dispatch({ type: ASK_FOR_SERVICE, payload: res.data });
    })
    .catch(err => {
      console.log('xxxErr', err);
    });
};
