import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRoute from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cardRoute.js"
import orderRouter from "./routes/orderRoute.js"



//app config
const app=express()
const port=4000

//middleware
app.use(express.json())
app.use(cors()) 

//DB connection
connectDB();
console.log(process.env.MONGO_URI);

//API end point
app.use("/api/food",foodRoute)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
