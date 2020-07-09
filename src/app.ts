import routes from '../src/routes/v1/user'

require('dotenv').config()
const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV

// Inisialisasi awal fastify.
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-formbody'))

routes.forEach(route => {
  fastify.route(route)
})

// fastify.register(require('./routes/v1/user'), { prefix: '/v1' })

const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.log.info(`server listening on ${fastify.server.address().port} in ${ENV} environment`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
// Jalankan server!
export default start
