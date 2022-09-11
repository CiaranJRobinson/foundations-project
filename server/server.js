const express = require('express')
const SERVER_PORT = 4004;
// const path = require('path')
const app = express()
const cors = require('cors')

app.use(express.json());
app.use(cors());


const {submitBtn, getResults, getDogs, getTheDogList} = require('./controller');

app.get("/api/inputs", getResults);
app.post("/api/inputs", submitBtn);
app.get("/api/inputs", getDogs);
app.get("/api/showall", getTheDogList);


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))