const express = require('express');
const router = express.Router();
const Db = require('../models/model')


// Find 
router.get('/', async (req, res) => {
    try {
        const allData = await Db.find();
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).send({message: error.message})
    };
});

// Submit
router.post('/', async (req, res) => {
    const {name, email, age} = req.body;
    try {
        const userAdded = await Db.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(400).send({message: error.message})
    };
    
});


// Get single user
router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const allData = await Db.findById({_id: id});
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).send({message: error.message})
    };
});

//Update
router.patch('/:id', async (req, res) => {
    const {name, email, age} = req.body;
    const {id} = req.params;
    try {
        const allData = await Db.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).send({message: error.message})
    };
});


//Delete
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const allData = await Db.findByIdAndDelete({_id: id});
        res.status(200).json(allData)
    } catch (error) {
        res.status(500).send({message: error.message})
    };
});



module.exports = router