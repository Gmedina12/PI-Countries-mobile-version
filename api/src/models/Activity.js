/**Activity Model:
ID, 
Nombre, 
Imagen (URL), 
Dificultad, 
Calificación, 
Duración en horas, 
Época.
*/
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type:DataTypes.TEXT,
            allowNull:false
        },
        review: {
            type:DataTypes.TEXT,
        },
        difficulty: {
            type: DataTypes.ENUM('Hard','Medium', 'Easy'),
            allowNull: false 
        },
        rating: {
            type: DataTypes.SMALLINT,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration_inHours: {
            type: DataTypes.SMALLINT,
        },
        season: {
            type: DataTypes.ENUM('Summer','Spring', 'Winter', 'Fall'),
            allowNull: false
        }
    });
};
