const express = require('express');
const router = express.Router();
const {
  allMovies,
  movieDetail,
  viewCreateMovie,
  createMovie,
  viewEditMovie,
  editMovie,
  deleteMovie,
} = require('../controllers/moviesController');
const moviesValidations = require('../validations/moviesValidations');

router.get('/', allMovies);
router.get('/detail/:id', movieDetail);
router.get('/create', viewCreateMovie);
router.post('/create', moviesValidations, createMovie);
router.get('/edit/:id', viewEditMovie);
router.put('/edit/:id', moviesValidations, editMovie);
router.delete('/delete/:id', deleteMovie);

module.exports = router;
