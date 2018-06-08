const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const app = express();

const expensesRoutes = require('./api/routes/expenses');
const categoriesRoutes = require('./api/routes/categories');
const subcategoriesRoutes = require('./api/routes/subcategories');
app.use(parser.json());
app.use(morgan());
app.use('/expenses',expensesRoutes);
app.use('/categories',categoriesRoutes);
app.use('/subcategories',subcategoriesRoutes);

app.use((req,res,next)=>{
	const error = new Error('Not found');
	error.status(404);
	next(error);
});

app.use((error,req,res,next)=>{
	res.status(error.status || 500);
	res.json({
		error : {
			messsage : error.message
		}
	})
});

module.exports = app;