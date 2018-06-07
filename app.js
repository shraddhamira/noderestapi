const express = require('express');
const app = express();

const expensesRoutes = require('./api/routes/expenses')
app.use('/expenses',expensesRoutes);
/*app.use((req,res,next)=>{
    res.status(200).json(
        {
            messaage : 'It works'
        }
    );
});*/
module.exports = app;