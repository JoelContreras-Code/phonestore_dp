const Order = require('./order.model');

const orderRepository = {
  findAll: () => Order.findAll(),
  findById: (id) => Order.findByPk(id),
  findByUser: (userId) => Order.findAll({ where: { userId } }),
  create: (data) => Order.create(data),
  update: (id, data) => Order.update(data, { where: { id } }),
};

module.exports = orderRepository;
