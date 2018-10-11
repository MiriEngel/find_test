﻿const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// //Passport middleware module and setup
// const passport = require('passport');
// const passportStrategies = require('../services/passpaort.strategies');
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

// //Custom express routing middleware that checks to see if the authenticated user is an admin
// module.exports = function (req, res, next) {
//     if(req.user.role === 'admin'){
//       next();
//     }
//     else {
//       res.send({ message: 'Unauthorized!' });
//     }
  
//   };

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.put('/imei/:id', addImei);
router.delete('/:id', _delete);

module.exports = router;    

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function addImei(req, res, next){
    userService.addImei(req.params.id, req.body.imei)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}