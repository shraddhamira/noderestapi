const express = require('express');
const router = express.Router();
const expenses = [{
    id: 1,
    description: 'House Rent',
    date: '07/06/2018',
    category: 'Household',
    amount: 8000
}, {
    id: 2,
    description: 'Grocery',
    date: '07/07/2018',
    category: 'Grocery',
    amount: 300
}];

router.get('/', (req, res, next) => {
    res.status(200).json(expenses);
});

router.get('/:id', (req, res, next) => {
    let expenseData = {};
    let id = req.params['id'];
    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]['id'] == id) {
            expenseData = expenses[i];
            break;
        }
    }
    res.status(200).json(expenseData);
});

router.post('/', (req, res, next) => {
	let expenseData = req.body;
	let size = expenses.length;
	expenseData['id'] = size + 1;
	expenses.push(expenseData);
    res.status(200).json(expenses);
	
});

router.put('/:id', (req, res, next) => {
	let expenseData = req.body;
	let id = expenseData['id'];
	
	for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]['id'] == id) {
            expenses[i]=expenseData;
            break;
        }
    }
    res.status(200).json(expenses);
});

router.delete('/:id', (req, res, next) => {
	let id = req.params['id'];
	console.log("deleting "+id);
	
	for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]['id'] == id) {
			console.log("Deleting"+i);
            expenses.splice(i,1);
            return res.status(200).json(expenses);
        }
    }
    return res.status(200).json({});
});

module.exports = router;