const express = require('express');
const router = express.Router();
const fs = require('fs');
const fileName = 'data/categories.json'
let rawdata = fs.readFileSync(fileName);
const categories = JSON.parse(rawdata);

router.get('/', (req, res, next) => {
	res.status(200).json(categories);
});

router.get('/:id', (req, res, next) => {
	let id = req.params['id'];
	for (i = 0; i < categories.length; i++) {
		if (categories[i]['id'] == id) {
			return res.status(200).json(categories[i]);
		}
		if (i == categories.length - 1) {
			return res.status(200).json({});
		}
	}
});

router.post('/', (req, res, next) => {
	let category = req.body;
	let size = categories.length;
	category['id'] = size + 1;
	categories.push(category);
	fs.writeFileSync(fileName, JSON.stringify(categories));
	res.status(200).json(categories);
});

router.put('/:id', (req, res, next) => {
	let category = req.body;
	let id = req.params['id'];

	for (let i = 0; i < categories.length; i++) {
		if (categories[i]['id'] == id) {
			categories[i] = category;
			break;
		}
	}
	fs.writeFileSync(fileName, JSON.stringify(categories));
	res.status(200).json(categories);
});

router.delete('/:id', (req, res, next) => {
	let id = req.params['id'];
	for (let i = 0; i < categories.length; i++) {
		if (categories[i]['id'] == id) {
			categories.splice(i, 1);
			fs.writeFileSync(fileName, JSON.stringify(categories));
			return res.status(200).json(categories);
		}
	}

	return res.status(200).json({});
});

module.exports = router;