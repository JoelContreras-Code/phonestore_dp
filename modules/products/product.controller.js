const productService = require('./product.service');

const productController = {
  getAll: async (req) => {
    const products = await productService.getAll();
    return { status: 200, data: products };
  },

  getById: async (req, id) => {
    const product = await productService.getById(id);
    if (!product) return { status: 404, data: { message: 'Product not found' } };
    return { status: 200, data: product };
  },

  create: async (req, body) => {
    const product = await productService.create(body);
    return { status: 201, data: product };
  },

  update: async (req, id, body) => {
    await productService.update(id, body);
    return { status: 200, data: { message: 'Updated' } };
  },

  delete: async (req, id) => {
    await productService.delete(id);
    return { status: 200, data: { message: 'Deleted' } };
  },
};

module.exports = productController;
