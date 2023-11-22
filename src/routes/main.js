const express = require('express');
const {route} = require('express/lib/application');
const hbs = require('hbs');


const routes = express.Router();


routes.get('/', (req, res) => {
    res.render("index");
});

routes.get("/Gallery",(req,res)=>{
    res.render("gallery");
    
});
routes.get("/Services",(req,res)=>{
    res.render("services")
});


routes.get("/Contact",(req,res)=>{
    res.render("contact");    
});

routes.get("/About",(req,res)=>{
    res.render("about");
    
});


module.exports = routes;