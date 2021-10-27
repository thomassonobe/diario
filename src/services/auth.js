import api from './api';

export class Auth {
  static signup(username, password) {
    return api.post('/signup', {username, password})
  }

  static login(username, password) {
    return new Promise((resolve, reject) => {
      api.get('/login', {auth: {username, password}})
        .then(res => resolve(res.data.token))
        .catch(reject)
    })
  }
}