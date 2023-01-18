const express = require('express');
const router = express.Router();
const { actorById, allActors } = require('../controllers/actorController');

router.get('/', allActors);
router.get('/:id', actorById);

module.exports = router;
