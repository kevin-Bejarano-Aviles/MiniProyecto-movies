const express = require('express');
const router = express.Router();
const {actorDetails }  = require('../controllers/actorController')
router.get('/detail/:id',actorDetails)

module.exports = router