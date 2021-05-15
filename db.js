
const mongoose = require('mongoose');
const chalk = require('chalk');

const dbURL = "mongodb://localhost:27017/NewTest";

mongoose.connect(dbURL, {useNewUrlParser: true} ); // Coonected to MongoDB

mongoose.connection.on('connected', ()=>{
    console.log(chalk.green('Connected to MongoDB'));
});

mongoose.connection.on('error', ()=>{
    console.log(chalk.orange('Error while connecting to MongoDB'));
});


mongoose.connection.on('disconnected', ()=>{
    console.log(chalk.orange('DB connection disconnected'));
});


