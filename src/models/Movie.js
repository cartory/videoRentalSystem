const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize.instance.js')

class Movie extends Model { }

Movie.init({
		key: 'UEmer16GAqACCAWc',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: true
	},
	ProducerID: {
		key: 'cEmer16GAqACCAWd',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: false,
		primaryKey: false,
		references: {
			key: 'ZEmer16GAqACCAWy',
			model: 'Producer'
		}
	},
	Title: {
		key: 'aEmer16GAqACCAWg',
		type: DataTypes.STRING(255),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Duration: {
		key: '6Emer16GAqACCAWh',
		type: DataTypes.INTEGER(10),
		unique: false,
		allowNull: true,
		primaryKey: false
	},
	Rating: {
		key: '6Emer16GAqACCAWi',
		type: DataTypes.CHAR(1),
		unique: false,
		allowNull: true,
		primaryKey: false
	}
}, { sequelize, tableName: 'Movie' })

module.exports = Movie