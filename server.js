const express = require('express')
const path = require('path')
require('babel-polyfill');


require('dotenv').config();

const PORT = process.env.HTTP_PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.use('static', express.static(path.join(__dirname, 'public')))

app.get('/', (req,res)=>{
    res.send({message:'flowers smell nice'});
    console.log('call')
});

app.get('/api', (req,res)=>{
    res.send({message:'flowers smell nice'});
    console.log('call')
});

app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}.`)
})