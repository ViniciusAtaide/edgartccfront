import request from 'superagent';

const serverUrl = 'http://localhost:4000';

export default {

  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) return cb(true);
    }
    sendRequest(`${serverUrl}/users`, {email, pass}, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) return cb(true);
      } else {
        console.log('non authenticated');
        if (cb) return cb(false);
      }
    })
  },

  getToken() {
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    if (cb) cb();
  },

  loggedIn() {
    return !!localStorage.token;
  }

};


function sendRequest(request, payload, cb) {
  
  request.get(`${serverUrl}users`)
    .send(payload)
      .end((err, resp) => {
        if (err) cb({authenticated: false});
        else cb({authenticated: true, token: resp.token});
      });
}
