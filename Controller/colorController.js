const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('colors post');
});

router.get('/:id', (req, res) => {
    res.send('color :id post');
});

router.post('/', (req, res) => {
    res.send('post colors');
});

router.put('/:id', (req, res) => {
    res.send('put colors');
});

router.delete('/:id', (req, res) => {
    res.send('delete colors');
});

module.exports = router;
