const Sequelize = require('sequelize');
const config = require('../config/database')

const ApiController = {
  index: async (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  filmes: async (req, res) => {
    const db = new Sequelize(config);
    const filmes = await db.query('select * from filme;', {type: Sequelize.QueryTypes.SELECT});
    console.log(filmes)
    res.render('filmes')
  }
}

module.exports = ApiController