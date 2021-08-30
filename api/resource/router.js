// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResources()
            .then(resource => {
                res.json(resource)
            })
            .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body 
    Resource.addResource(resource)
            .then(resource => {
                res.status(201).json(resource)
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