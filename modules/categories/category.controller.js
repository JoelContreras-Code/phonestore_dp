const categoryService = require('./category.service');

const categoryController = {
  getAll: async () => {
    const categories = await categoryService.getAll();
    return { status: 200, data: categories };
  },

  getById: async (id) => {
    const category = await categoryService.getById(id);
    if (!category) return { status: 404, data: { message: 'Category not found' } };
    return { status: 200, data: category };
  },

  create: async (body) => {
    const category = await categoryService.create(body);
    return { status: 201, data: category };
  },

  update: async (id, body) => {
    await categoryService.update(id, body);
    return { status: 200, data: { message: 'Updated' } };
  },

  delete: async (id) => {
    await categoryService.delete(id);
    return { status: 200, data: { message: 'Deleted' } };
  },
};

module.exports = categoryController;
