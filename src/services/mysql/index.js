const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xe',
  database: 'mydeas'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule
}
