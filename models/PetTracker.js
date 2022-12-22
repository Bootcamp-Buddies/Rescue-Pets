const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetTracker extends Model {}

PetTracker.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'user',
                key: 'id'
            },
        },

        pet_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            references: {
                model: 'pets',
                key: 'id'
            },
        },
    },

    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'pettracker',
    }
);

module.exports = PetTracker;