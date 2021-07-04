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
    REACT_APP_API_BASE_URL: 'http://demo4065522.mockable.io',
  },

  prod: {
    ...defaults,
    REACT_APP_API_BASE_URL: 'http://demo4065522.mockable.io',
  },
}

