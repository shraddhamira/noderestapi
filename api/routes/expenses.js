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
    res.status(200).json({
        message: 'Handling GET requests'
    });
});

/*router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests'
    });
});*/

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
    let expenseData = {};
    console.log(req.body);
    var keys = Object.keys(req.params);
    console.log(keys);
    for(i=0;i<keys.length;i++)
    console.log("here"+ req.params[keys[i]]);
    res.status(200).json({message : 'received'});
});

module.exports = router;