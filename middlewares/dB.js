const mongoose = require('mongoose')

const url = `mongodb+srv://fsd10:fsd10@cluster0.tmtxvxf.mongodb.net/FSD10?appName=Cluster0`

const connectDb = async () => {
    try{
        await mongoose.connect(url)
        console.log('Db connected')
    } catch(err) {
        console.log('Db Error')
    }

}

module.exports = connectDb