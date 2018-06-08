const express = require('express');
const fs = require('fs');
const fileName = 'data/expenses.json';
const rawData = fs.readFileSync(fileName);
var expenses = JSON.parse(rawData);
const router = express.Router();

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
    fs.writeFile(fileName, JSON.stringify(expenses));
    res.status(200).json(expenses);

});

router.put('/:id', (req, res, next) => {
    let expenseData = req.body;
    let id = expenseData['id'];

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]['id'] == id) {
            expenses[i] = expenseData;
            break;
        }
    }
    fs.writeFile(fileName, JSON.stringify(expenses));
    res.status(200).json(expenses);
});

router.delete('/:id', (req, res, next) => {
    let id = req.params['id'];

    for (let i = 0; i < expenses.length; i++) {
        if (expenses[i]['id'] == id) {
            console.log("Deleting" + i);
            expenses.splice(i, 1);
            fs.writeFile(fileName, JSON.stringify(expenses));
            return res.status(200).json(expenses);
        }
    }
    return res.status(200).json({});
});

module.exports = router;