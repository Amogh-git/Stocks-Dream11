import express from 'express'
import connectToDB from '../Backend/config/db.js'

const app = express()
const PORT = process.env.PORT || 5000


connectToDB()


app.listen(PORT,()=>{
    console.log("app running on", PORT);
    }
);