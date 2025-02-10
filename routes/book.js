const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/',function(request, response){
    book.getAllBooks(function(result){
        response.json(result);
    })
});
router.get('/:id');
router.post('/');
router.put('/:id');
router.delete('/:id');

module.exports=router;