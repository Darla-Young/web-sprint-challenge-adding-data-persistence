const express = require('express')
const { addProject, getProjects } = require('./model')
const router = express.Router()

router.post('/', (req, res, next) => {
  addProject(req.body)
    .then(project => res.json(project))
    .catch(next)
})

router.get('/', (req, res, next) => {
  getProjects()
    .then(projects => res.json(projects))
    .catch(next)
})

module.exports = router