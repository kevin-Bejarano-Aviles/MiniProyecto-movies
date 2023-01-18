const express = require('express');
const router = express.Router();
const { allGenres, genreById } = require('../controllers/genresController');

router.get('/', allGenres);
router.get('/:id', genreById);

module.exports = router;
