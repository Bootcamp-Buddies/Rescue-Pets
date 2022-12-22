const User = require('./User');
const Pets = require('./Pets');
const PetTracker = require('./PetTracker');

User.hasMany(Pets, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Pets.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

PetTracker.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

PetTracker.belongsTo(Pets, {
    foreignKey: 'pet_id',
    onDelete: 'cascade'
});

User.hasMany(PetTracker, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Pets.hasMany(PetTracker, {
    foreignKey: 'pet_id',
    onDelete: 'cascade'
});

module.exports = { User, Pets, PetTracker };
