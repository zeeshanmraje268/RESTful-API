require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT ||5000;
const router=require('./routes/product');
const connectDB=require('./db/connect')
app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})

app.use("/api/products",router);

const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,()=>{
            console.log(`The server is running on ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();