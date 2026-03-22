const orderService = require('./order.service');

const orderController = {
  getAll: async () => {
    const orders = await orderService.getAll();
    return { status: 200, data: orders };
  },

  getById: async (id) => {
    const order = await orderService.getById(id);
    if (!order) return { status: 404, data: { message: 'Order not found' } };
    return { status: 200, data: order };
  },

  create: async (body) => {
    const order = await orderService.create(body);
    return { status: 201, data: order };
  },

  updateStatus: async (id, body) => {
    await orderService.updateStatus(id, body.status);
    return { status: 200, data: { message: 'Status updated' } };
  },
};

module.exports = orderController;
