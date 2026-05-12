const express = require('express')
const mongoose  = require('mongoose')
const connectDb = require('./middlewares/dB')
// const userController = require('./controllers/userController')

const userRoutes = require('./routes/userRoutes')


const app = express()

app.use(express.json())
connectDb()


// User Routes
app.use('/user', userRoutes)

//Product Routes
// app.use('/product',)

app.listen(3000, () => {
    console.log(`Server started on 3000`)
})