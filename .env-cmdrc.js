const fs = require('fs');

const defaults = {
}

module.exports = {
  test: {
    ...defaults,
    REACT_APP_API_BASE_URL: '',
  },

  local: {
    ...defaults,
    REACT_APP_API_BASE_URL: 'http://15.206.125.174:8091',
  },

  prod: {
    ...defaults,
    REACT_APP_API_BASE_URL: 'http://15.206.125.174:8091',
  },
}

