const User = require('./User');
const Pets = require('./Pets');

User.hasMany(Pets, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Pets.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

module.exports = { User, Pets };
