// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', (req, res, next) =>{
    Tasks.getTask()
    .then(task => {
        res.json(task)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const tBody = req.body
    Tasks.addTask(tBody)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router