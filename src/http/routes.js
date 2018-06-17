// const server = require('./../server/index')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Mydeas API restiful using Node.js, restify and MySQL')
    next()
  })

  server.get('/category', (req, res, next) => {
    res.send(['1', 'GET - Categories'])
    next()
  })

  server.post('/category', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  /*
  server.put('/category', (req, res, next) => {
    res.send()
    next()
  })

  server.delete('/category', (req, res, next) => {
    res.send()
    next()
  })
  */
}

module.exports = routes
