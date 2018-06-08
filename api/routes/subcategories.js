const express = require('express');
const router = express.Router();

const fs = require('fs');
const fileName = 'data/subcategories.json';
let rawdata = fs.readFileSync(fileName);  
const subcategories = JSON.parse(rawdata);

router.get('/',(req,res,next)=>{
    res.status(200).json(subcategories);
});

router.get('/:id',(req,res,next) =>{
    let id = req.params['id'];
    for(i = 0;i< subcategories.length;i++){
        if(subcategories[i]['id']==id)
        return res.status(200).json(subcategories[i]);
    }
    return res.status(200).json({});
});

router.get('/:ctegoryId/:id',(req,res,next) =>{
    let id = req.params['id'];
    for(i = 0;i< subcategories.length;i++){
        if(subcategories[i]['id']==id)
        return res.status(200).json(subcategories[i]);
    }
    return res.status(200).json({});
});

router.post('/', (req, res, next) => {
	let category = req.body;
	let size = subcategories.length;
	category['id'] = size + 1;
    subcategories.push(category);
    fs.writeFileSync(fileName, JSON.stringify(subcategories)); 
	res.status(200).json(subcategories);
});

router.put('/:id', (req, res, next) => {
	let category = req.body;
	let id = req.params['id'];

	for (let i = 0; i < subcategories.length; i++) {
		if (subcategories[i]['id'] == id) {
			subcategories[i] = category;
			break;
		}
	}
	fs.writeFileSync(fileName, JSON.stringify(subcategories)); 
	res.status(200).json(subcategories);
});

router.delete('/:id', (req, res, next) => {
	let id = req.params['id'];
	for (let i = 0; i < subcategories.length; i++) {
		if (subcategories[i]['id'] == id) {
			subcategories.splice(i, 1);
			fs.writeFileSync(fileName, JSON.stringify(subcategories)); 
			return res.status(200).json(subcategories);
		}
	}
	return res.status(200).json({});
});
module.exports = router;