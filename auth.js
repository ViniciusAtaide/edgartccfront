

export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) return cb(true);
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        debugger;
        localStorage.token = res.token;
        if (cb) return cb(true);
      } else {
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


function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {

      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      });
    } else {
      cb({authenticated: false})
    }
  }, 0);
}

