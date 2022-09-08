
// sequelize info goes here, as well as exports for seeding the database

// require('dotenv').config();
// const {CONNECTION_STRING} = process.env;
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: "postgres",
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });
const dogobj = require('./dogobj.json');
const resultsArr = [];

module.exports = {
    getDogs: (req, res) => {
        res.status(200).send(dogobj);
    },

    getTheDogList: (req, res) => {
        res.status(200).send(dogobj);
    },

    submitBtn: (req, res) => {
        resultsArr.push(req.body);
        res.status(200).send(resultsArr);
    },

    getResults: (req, res) => {
        console.log("Endpoint hit")
        let username = resultsArr.shift();
            let { name, questionone, questiontwo, questionthree, questionfour, questionfive, questionsix, questionseven} = username;

            let sum = Number(questionone) + Number(questiontwo)+ Number(questionthree)+ Number(questionfour)+ Number(questionfive)+ Number(questionsix)+ Number(questionseven);

            console.log(`${name} got ${sum} points!`)

        if (sum === 0){
            console.log(dogobj[7])
            return res.status(200).send(dogobj[7])
        }
        else if (sum === 1){
            console.log(dogobj[6])
            return res.status(200).send(dogobj[6])
        }
        else if (sum === 2){
            console.log(dogobj[5])
            return res.status(200).send(dogobj[5])
        }
        else if (sum === 3){
            console.log(dogobj[4])
            return res.status(200).send(dogobj[4])
        }
        else if (sum === 4){
            console.log(dogobj[3])
            return res.status(200).send(dogobj[3])
        }
        else if (sum === 5){
            console.log(dogobj[2])
            return res.status(200).send(dogobj[2])
        }
        else if (sum === 6){
            console.log(dogobj[1])
            return res.status(200).send(dogobj[1])
        }
        else if (sum === 7){
            console.log(dogobj[0])
            return res.status(200).send(dogobj[0])
        };
    }
}
