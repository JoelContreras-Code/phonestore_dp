const productRepository = require('./product.repository');

const productService = {
  getAll: () => productRepository.findAll(),
  getById: (id) => productRepository.findById(id),
  create: (data) => productRepository.create(data),
  update: (id, data) => productRepository.update(id, data),
  delete: (id) => productRepository.delete(id),
};

module.exports = productService;
