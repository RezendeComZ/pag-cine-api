var express = require('express');
var router = express.Router();
const ApiController = require('../controller/ApiController');

/* GET home page. */
router.get('/', ApiController.index);
router.get('/filmesQuery', ApiController.filmesQuery);
router.get('/filmes', ApiController.filmes);
router.get('/idiomas/:id', ApiController.idiomas);

module.exports = router;
