import axios from 'axios'

export default axios.create({
  baseURL: 'https://limpizimo-optimus.herokuapp.com/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});
