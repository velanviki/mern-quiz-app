const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 5001;

//CORS
app.use(cors())

//Body parser
app.use(express.json())

app.use("/",router)

//mongodb URI
// const URI = "mongodb+srv://quizapp:quizapp@cluster0.beslv3d.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(process.env.URI).then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})