const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath)

app.use(express.static(path.join(__dirname, "../templates/views")));

app.get('', (req, res)=>{
    res.render('index',{
        title:"Index Header",
        body:"Index Body",
    });
})

app.listen(3000, ()=>{
    console.log("listening in port 3000");
})