const categoryRepository = require('./category.repository');

const categoryService = {
  getAll: () => categoryRepository.findAll(),
  getById: (id) => categoryRepository.findById(id),
  create: (data) => categoryRepository.create(data),
  update: (id, data) => categoryRepository.update(id, data),
  delete: (id) => categoryRepository.delete(id),
};

module.exports = categoryService;
