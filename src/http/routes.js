const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Mydeas API restiful using Node.js, restify and MySQL')
    next()
  })

  server.get('/category', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
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
