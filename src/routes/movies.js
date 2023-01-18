const express = require('express');
const router = express.Router();
const {
  addActorToMovie,
  allMovies,
  createMovie,
  deleteMovie,
  editMovie,
  movieById,
  viewCreateMovie,
  viewEditMovie,
} = require('../controllers/moviesController');
const moviesValidations = require('../validations/moviesValidations');
const moviesActorValidation = require('../validations/moviesActorValidation')
const { fielValidations } = require('../middlewares/fieldValidations');

router.get('/', allMovies);
router.get('/detail/:id', movieById);
router.get('/create', viewCreateMovie);
router.post('/create', moviesValidations, fielValidations, createMovie);
router.get('/edit/:id', viewEditMovie);
router.put('/edit/:id', moviesValidations, fielValidations, editMovie);
router.delete('/delete/:id', deleteMovie);
router.post('/addActor',moviesActorValidation,fielValidations, addActorToMovie);

module.exports = router;
