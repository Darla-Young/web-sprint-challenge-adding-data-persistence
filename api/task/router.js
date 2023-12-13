const express = require('express')
const { addTask, getTasks } = require('./model')

const router = express.Router()

router.post('/', (req, res, next) => {
  addTask(req.body)
    .then(task => res.json(task))
    .catch(next)
})

router.get('/', (req, res, next) => {
  getTasks()
    .then(tasks => res.json(tasks))
    .catch(next)
})

module.exports = router