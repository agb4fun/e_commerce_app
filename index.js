const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/user.js')

dotenv.config();


mongoose.connect(
    process.env.MONGO_URI
).then(()=>console.log('Database connection was successfull')).catch((err)=>{console.log(err)})

app.use(express.json())
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.send("Hola Express")
})





app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on port ${process.env.PORT}`)
})