import api from './api';

/**
 * Note: {
 *  id: number,
 *  username: string,
 *  title: string,
 *  desc: string,
 *  timestamp: Date,
 *  mood: number, (de 0 a 4)
 *  colortag: number[] (entre 0 e N, máximo 32)
 * }
 */

export class Notes {
  static get({token}) {
    return new Promise((resolve, reject) => {
      api.get('/notes', {auth: {username: token, password: true}})
        .then(res => {
          const notes = res.data.notes
          resolve(notes.map(n => ({...n, timestamp: new Date(n.timestamp)})))
        })
        .catch(reject)
    })
  }

  static post({token}, note) {
    return api.post(`/notes`, note, {
      auth: {username: token, password: true}
    })
  }

  static put({token}, note) {
    return api.put(`/notes/${note.id}`, note, {
      auth: {username: token, password: true}
    })
  }

  static delete({token}, note) {
    return api.delete(`notes/${note.id}`, {
      auth: {username: token, password: true}
    })
  }
}