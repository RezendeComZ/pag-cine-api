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
    tableName: 'filme',
    timestamps: false
  })
  return Idioma
}