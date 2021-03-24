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
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })
  return Idioma
}