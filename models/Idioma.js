module.exports = (sequelize, DataType) => {
  const Idioma = sequeliza.define('idioma', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeIdioma: DataType.STRING,
  },
  {
    tableName: 'idioma',
    timestamps: false
  })
  return Idioma
}