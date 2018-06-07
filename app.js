const express = require('express');
const parser = require('body-parser');
const app = express();

const expensesRoutes = require('./api/routes/expenses')
console.log("add routes");
//app.use(parser.urlencoded({extended : true}));
app.use(parser.json());
app.use('/expenses',expensesRoutes);
/*app.use((req,res,next)=>{
    res.status(200).json(
        {
            messaage : 'It works'
        }
    );
});*/
module.exports = app;