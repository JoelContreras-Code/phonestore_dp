const userService = require('./user.service');

const userController = {
  getAll: async () => {
    const users = await userService.getAll();
    return { status: 200, data: users };
  },

  getById: async (id) => {
    const user = await userService.getById(id);
    if (!user) return { status: 404, data: { message: 'User not found' } };
    return { status: 200, data: user };
  },

  create: async (body) => {
    const user = await userService.create(body);
    return { status: 201, data: user };
  },

  update: async (id, body) => {
    await userService.update(id, body);
    return { status: 200, data: { message: 'Updated' } };
  },

  delete: async (id) => {
    await userService.delete(id);
    return { status: 200, data: { message: 'Deleted' } };
  },
};

module.exports = userController;
