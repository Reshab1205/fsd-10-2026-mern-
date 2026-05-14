const express = require('express')
const connectDb = require('./middlewares/dB')
const app = express()

const userRoutes = require('./routes/userRoutes')



app.use(express.json())
connectDb()


// User Routes
app.use('/user', userRoutes)

//Product Routes
// app.use('/product',)

app.listen(3000, () => {
    console.log(`Server started on 3000`)
})