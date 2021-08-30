// build your `/api/projects` router here

const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (res, req, next)=> {
        Projects.getProject()
            .then(project => {
                res.json(project)
            })
            .catch(next)
})

router.post('/', (req, res, next) =>{
    const pBody = req.body

    Projects.addProject(pBody)
        .then(project => {
            res.status(201).json(project)
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