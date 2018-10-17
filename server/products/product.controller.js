const express = require('express');
const router = express.Router();
const productService = require('./product.service');

// routes

router.post('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/:id', create);
router.delete('/:id', _delete);

module.exports = router;    

function getAll(req, res, next) {
    productService.getAll(req.body.userId)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    productService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    productService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function create(req, res, next){
    productService.create(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
    productService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}