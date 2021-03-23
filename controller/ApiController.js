const Sequelize = require('sequelize');
const config = require('../config/database')

const ApiController = {
  index: function(req, res, next) {
    const db = new Sequelize('config');
    db.query('SELECT * FROM filme');
    res.render('index', { title: 'Express' });
  },
  filmes: (req, res) => {
    res.render('filmes')
  }
}

module.exports = ApiController