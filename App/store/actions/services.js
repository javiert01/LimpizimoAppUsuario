import api from '../../api';

export const createService = service => {
  return dispatch => {
    api
      .post('servicio/crear', service)
      .then(res => {
        console.log('xxxRes', res);
      })
      .catch(err => {
        console.log('xxxErr', err);
      });
  };
};
