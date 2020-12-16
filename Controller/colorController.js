const express = require('express');
const router = express.Router();

const db = require('../Models');

router.get('/', (req, res) => {
    db.Colors.find()
        .then((colors) => {
            res.status(200).json({ colors: colors });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get('/:id', (req, res) => {
    db.Colors.find()
        .then((colors) => {
            res.status(200).json({ color: colors[req.params.id - 1] });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.post('/', (req, res) => {
    db.Colors.create(req.body)
        .then((color) => {
            res.status(201).json({ created: true, color: color });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.put('/:name', (req, res) => {
    db.Colors.updateOne({ name: req.params.name }, { name: req.body.name })
        .then(() => {
            res.status(200).json({ updated: true });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.delete('/:name', (req, res) => {
    db.Colors.deleteOne({ name: req.params.name })
        .then(() => {
            res.status(200).json({ deleted: true });
        })
        .catch((err) => {
            res.send(err);
        });
});

module.exports = router;
