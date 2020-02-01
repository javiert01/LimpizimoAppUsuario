import api from '../../api';

export const createServie = service => {
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
