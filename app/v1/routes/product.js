const express = require ('express');
const {GetAll,GetByID,AddNew,UpdateByID,DeletByID} = require('../controllers/product'); 
const router = express.Router();

router.get('/',GetAll);
router.get('/',GetByID);
router.post('/',AddNew);
router.put('/',UpdateByID);
router.delete('/',DeletByID);

module.exports=router;