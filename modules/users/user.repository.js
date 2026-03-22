const User = require('./user.model');

const userRepository = {
  findAll: () => User.findAll({ attributes: { exclude: ['password'] } }),
  findById: (id) => User.findByPk(id),
  findByEmail: (email) => User.findOne({ where: { email } }),
  create: (data) => User.create(data),
  update: (id, data) => User.update(data, { where: { id } }),
  delete: (id) => User.destroy({ where: { id } }),
};

module.exports = userRepository;
