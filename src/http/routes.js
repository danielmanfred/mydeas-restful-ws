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

  server.post('/category', async (req, res, next) => {
    const { id, name } = req.params
    try {
      res.send(await db.categories().save(id, name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.put('/category', async (req, res, next) => {
    const { name } = req.params
    try {
      res.send(await db.categories().update(name))
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })
  /*
  server.delete('/category', (req, res, next) => {
    res.send()
    next()
  })
  */
}

module.exports = routes
