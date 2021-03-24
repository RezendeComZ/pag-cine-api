const Sequelize = require('sequelize');
const config = require('../config/database')
const { Filme, Idioma } =  require('../models')

const ApiController = {
  index: async (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  filmesQuery: async (req, res) => { // usando somente queries
    const db = new Sequelize(config);
    const filmes = await db.query('select * from filme;', {type: Sequelize.QueryTypes.SELECT});
    console.log(filmes)
  },
  filmes: async (req, res) => {
    let filmes = await Filme.findAll({
      include:{
        model: Idioma,
        as: 'idioma',
        required: true // Todas as informações em comum 'true'
      }
    });
    console.log(filmes[0].idioma)
    res.render('filmes', {filmes})
  },
  idiomas: async (req, res) => {
    const {id} = req.params;
    let idiomas = await Idioma.findOne({
      where: {
        id: id
      },
      include: {
        model: Filme,
        as: 'filmes',
        required: true
      }
    });
    console.log(idiomas.filmes)
    console.log(idiomas.nomeIdioma)
  }
}

module.exports = ApiController