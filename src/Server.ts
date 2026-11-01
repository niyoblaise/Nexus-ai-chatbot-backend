import express from "express"
import {dbConnect} from "./config/Database.js";

const app = express()

dbConnect().then(()=>{
    app.listen(4000,()=>{
        console.log("Server started on  port 4000!")
    })
})
