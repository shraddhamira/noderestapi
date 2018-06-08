const express = require('express');
const parser = require('body-parser');
const app = express();

const expensesRoutes = require('./api/routes/expenses');
const categoriesRoutes = require('./api/routes/categories');
const subcategoriesRoutes = require('./api/routes/subcategories');
app.use(parser.json());
//app.use('/expenses',expensesRoutes);
app.use(parser.json());
app.use('/categories',categoriesRoutes);
app.use('/subcategories',subcategoriesRoutes);
/*app.use((req,res,next)=>{
    res.status(200).json(
        {
            messaage : 'It works'
        }
    );
});*/

module.exports = app;