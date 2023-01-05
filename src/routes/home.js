const {Router} = require('express');
const { homePage } = require('../controllers/homeController');
const router = Router();

router.get('/',homePage)

module.exports = router;