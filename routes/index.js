var express = require('express');
const ApiController = require('../controller/ApiController');
var router = express.Router();

/* GET home page. */
router.get('/', ApiController.index);
router.get('/filmes', ApiController.filmes);

module.exports = router;
