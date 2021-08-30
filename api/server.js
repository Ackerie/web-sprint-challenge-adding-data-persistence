// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const ResourceRouter =require('./resource/router')
const ProjectRouter = require('./project/router')
const TaskRouter = require('./task/router')
const server = express()


server.use(helmet())
server.use(express.json())
server.use('/api/projects', ProjectRouter)
server.use('/api/resources', ResourceRouter)
server.use('/api/tasks', TaskRouter)

server.get("/", (req, res) => {
    res.status(200).json( "API is running fantastically!" )
  })

module.exports = server