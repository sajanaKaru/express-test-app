const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Get all
router.get('/', async (req, res) => {
  res.sendStatus(200)
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/test', (req, res) => {
  res.send('Hello, World!');
  // res.sendStatus(200)
})

// Get one
router.get('/:id', getUser, (req, res) => {
  res.send(req.user.name)
})

// create
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    mobile: req.body.mobile
  })

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

async function getUser(req, res, next){
  try {
    user = await User.findById(req.params.id)
    if(user == null){
      return res.status(404).json({ message: 'cannot find user'})
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

  req.user = user
  next()
}

module.exports = router