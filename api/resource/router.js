const express = require('express')
const { addResource, getResources } = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
  addResource(req.body)
    .then(resource => res.json(resource))
    .catch(next)
})

router.get('/', (req, res, next) => {
  getResources()
    .then(resources => res.json(resources))
    .catch(next)
})

module.exports = router