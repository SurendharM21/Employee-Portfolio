const express=require('express');
const mongoose=require('mongoose')
const app=express();
const cors=require('cors');
const routess=require('../Backend/Route/resumeRoute')
const body_parser=require('body-parser');
const resumeModel = require('./Models/resumeModel');
const path=require('path')

require('dotenv').config();
app.use(cors({origin:'http://localhost:3000', credentials:true}));
app.use(body_parser.json());

mongoose.connect(process.env.NEW)
.then(
    console.log("mongo db connected")
).catch((e)=>{
    console.log("mongo db not connected")
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.use("/api/submitForm/",routess)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(process.env.PORT,()=>{
    console.log("App Started");
});
