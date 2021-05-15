
const express = require('express');
 const app = express();
 const path = require('path');
 const db = require('./db');
 
 const userRouter = require('./routes/user');

 const employeesRouter = require('./routes/employees');
const port = process.env.PORT || 8004 ;
 app.listen(port, ()=>{
     console.log('Server listening 8004 port');
 });

 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

 app.use(express.json());
 app.use(express.urlencoded({extended : false}));

 /* http://localhost:8080/ */
 app.get('/', (req, res)=>{

    res.render('login', {'title' : 'Page Title', version : '10.0.1' });
 
 });

 

 app.use('/user', userRouter);

 app.use('/employees', employeesRouter);   