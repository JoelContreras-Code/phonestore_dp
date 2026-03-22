const orderRepository = require('./order.repository');

const orderService = {
  getAll: () => orderRepository.findAll(),
  getById: (id) => orderRepository.findById(id),
  getByUser: (userId) => orderRepository.findByUser(userId),
  create: (data) => orderRepository.create(data),
  updateStatus: (id, status) => orderRepository.update(id, { status }),
};

module.exports = orderService;
