"use strict";
const express=require('express')
const app=express();
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log("hello in"))
app.use(express.static('public'))
