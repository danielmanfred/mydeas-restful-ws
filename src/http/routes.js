const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Mydeas API restiful using Node.js, restify and MySQL')
    next()
  })
}

module.exports = routes
