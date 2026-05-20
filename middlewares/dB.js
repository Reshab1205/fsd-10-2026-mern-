const mongoose = require('mongoose')
 const { configDotenv } =  require('dotenv')

 configDotenv()


const url = process.env.DB_URL

const connectDb = async () => {
    try{
        await mongoose.connect(url)
        console.log('Db connected')
    } catch(err) {
        console.log('Db Error')
    }

}

module.exports = connectDb