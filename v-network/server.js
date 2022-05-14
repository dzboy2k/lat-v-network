require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())


// Routers
app.use('/api', require('./routes/authRouter'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, err => {
  if(err) throw err
  console.log('Connected to mongodb')
})


const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is running on port', port)
})