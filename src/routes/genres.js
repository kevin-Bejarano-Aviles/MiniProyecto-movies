const express = require('express');
const router = express.Router();
const { detailGenreWithMovies}  = require('../controllers/genresController')
router.get('/detail/:id',detailGenreWithMovies)

module.exports = router