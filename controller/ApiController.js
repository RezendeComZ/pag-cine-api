const Sequelize = require('sequelize');
const config = require('../config/database')
const { Filme } =  require('../models')

const ApiController = {
  index: async (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  filmesQuery: async (req, res) => { // usando somente queries
    const db = new Sequelize(config);
    const filmes = await db.query('select * from filme;', {type: Sequelize.QueryTypes.SELECT});
    console.log(filmes)
    res.render('filmes')
  },
  filmes: async (req, res) => {
    let filmes = await Filme.findAll();
    console.log(filmes)
  }
}

module.exports = ApiController