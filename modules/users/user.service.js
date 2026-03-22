const userRepository = require('./user.repository');

const userService = {
  getAll: () => userRepository.findAll(),
  getById: (id) => userRepository.findById(id),
  create: (data) => userRepository.create(data),
  update: (id, data) => userRepository.update(id, data),
  delete: (id) => userRepository.delete(id),
};

module.exports = userService;
