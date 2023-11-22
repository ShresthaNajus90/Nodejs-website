
const express = require("express");
const routes = require("./routes/main")
const mongoose = require("mongoose");
const Details = require("./models/Details");
const hbs = require("hbs");
const app = express();


//static/css/style.css
app.use('/static',express.static("public"))
app.use('',routes);

// Template Engien
app.set('view engine','hbs');
app.set('views', 'views');
hbs.registerPartials("views/partials");

//mongoose DB Connecation
mongoose.connect("mongodb://localhost/website_tut",()=>{
    console.log("Connected to MongoDB");

//     Details.create({
//         brandName:"TechWrold",
//         brandIconUrl:"https://media.istockphoto.com/id/1133949164/vector/magic-hand.jpg?s=2048x2048&w=is&k=20&c=wMCH-XWdE-eUGlbrYvjjs4BkrGiwsepnYdQmf0mnh60=",
//         links:[
//             {
//                 label:"Home",
//                 url:"/",
//             },
//             {
//                 label:"Services",
//                 url:"/services",
//             }
//         ]
//     });

});




mongoose.conn



app.listen(process.env.PORT || 9492, () => {
    console.log("Server is running on port 9492")}
);
