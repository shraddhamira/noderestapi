const express= require('express');
const router = express.Router();
const categories = [
{
	id : 1,
	description : 'Household'
},
{
	id : 2,
	description : 'Entetainment'
},
{
	id : 3,
	description:'Investment'
}
];

router.get('/',(req,res,next)=>{
	res.status(200).json(categories);
});

router.get('/:id',(req,res,next)=>{
	let id = req.param['id'];
	let category = {};
	for(i=0;i<categories.length;i++){
		if(categories[i]['id'] == id){
			category = categories[i];
			return res.status(200).json(category);
		}
	}	
});

router.post('/',(req,res,next)=>{
	let category =req.body;
	let size = categories.length;
	category['id'] = size + 1;
	categories.push(category);
	res.status(200).json(categories);
});

router.put('/:id',(req,res,next)=> {
	let category = req.body;
	let id = category['id'];
	
	for (let i = 0; i < categories.length; i++) {
        if (categories[i]['id'] == id) {
            categories[i]=category;
            break;
        }
    }
    res.status(200).json(categories);
});

router.delete('/:id', (req, res, next) => {
	let id = req.params['id'];
	for (let i = 0; i < categories.length; i++) {
        if (categories[i]['id'] == id) {
            categories.splice(i,1);
            return res.status(200).json(categories);
        }
    }
    return res.status(200).json({});
});

module.exports = router;