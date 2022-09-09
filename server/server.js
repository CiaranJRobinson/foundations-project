const express = require('express')
const SERVER_PORT = 4004;
// const path = require('path')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());


// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });
// app.get('/js', function(req,res){
//     res.sendFile(path.join(__dirname, '/public/index.js'));
// });
// app.get('/styles', function(req,res){
//     res.sendFile(path.join(__dirname, '/public/index.css'));
// });

const {submitBtn, getResults, getDogs, getTheDogList} = require('./controller');
const {bindButtons} = require ('../public/petfinder')

app.get("/api/inputs", getResults);
app.post("/api/inputs", submitBtn);
app.get("/api/inputs", getDogs);
app.get("/api/showall", getTheDogList);
app.get("https://api.petfinder.com/v2/animals", bindButtons);


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))