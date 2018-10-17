const express = require('express');
const router = express.Router();
const notificationService = require('./notification.service');

// routes
router.post('/', getAll);

module.exports = router;    

function getAll(req, res, next) {
    notificationService.getAll(req.body.userId)
        .then(users => res.json(users))
        .catch(err => next(err));
}