const express =require("express");
const bodyParser = require('body-parser');
const dns = require('dns'); 

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/getmeip",(req,res)=>{
    dns.lookup(req.body["website_name"], (err, value) => { 
        if(err) { 
            res.send(err); 
            return 
        } 
        res.send(value); 
    }) 
})

app.listen(8080,()=>{
    console.log("server started")
})