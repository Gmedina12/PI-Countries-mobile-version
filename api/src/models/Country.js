/** Country Model: 
ID (Código de tres letras). *(obligatorio)
Nombre. *(obligatorio)
Imagen de la bandera. *(obligatorio)
Imagen del escudo.
Continente. *(obligatorio)
Capital. *(obligatorio)
Idiomas. *(obligatorio)
Subregión.
Ubicación. Link de GoogleMaps
Área.
Población. * (obligatorio)
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    ID: {
      type: DataTypes.STRING(3),
      primaryKey:true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    coatOfArms:{
      type: DataTypes.TEXT,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
      },
    subregion: {
      type: DataTypes.STRING
    },
    maps: {
      type: DataTypes.TEXT
    },
    area: {
      type: DataTypes.STRING
    },
    population:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};


