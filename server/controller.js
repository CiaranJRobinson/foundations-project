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
        const { body } = req.body;
        console.log(req.body);
        resultsArr.push(body);
        console.log(resultsArr[0]);
        res.status(200).send(resultsArr);
    },

    // getResults: (req, res) => {
    //     res.status(200).send(req);
    // }
}