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

const resultsArr = [];

module.exports = {
    submitBtn: (req, res) => {
        // const { body } = req.body;
        // console.log(req.body);
        resultsArr.push(req.body);
        console.log(resultsArr);
        res.status(200).send(resultsArr);
    },

//  getResults: (req, res) => {
//         let username = resultsArr.shift();
//          console.log(resultsArr);
//        function sum(resultsArr) { 
//             let sum = 0;  
//             for (let i = 0; i < resultsArr.length; i++){ 
//                 sum += resultsArr[i]; 
//                 console.log(sum);}
//         } 

//         if (sum === 2){
//             console.log("You are a greyhound")
//         };
//         elseif (sum === 1){
//             console.log("You are a basset hound")
//         };
//         else {
//             console.log("You are a cat")
//         }

//         res.status(200).send(req);
//     }
}
