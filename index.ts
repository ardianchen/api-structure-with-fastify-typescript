
require('dotenv').config()

if (!process.env.NODE_ENV) {
  throw new Error('[App] .env value must be set')
}

if (process.env.NODE_ENV === 'production') {
  require('./dist/server.bundle')
} else {
  process.on('unhandledRejection', r => console.log(r))
  require('./src/index')
}
