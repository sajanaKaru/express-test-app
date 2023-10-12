require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.error('connected to database'))

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.listen(3000, () => console.log('Server started on port 3000'))