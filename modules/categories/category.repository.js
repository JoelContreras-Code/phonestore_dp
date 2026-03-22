const Category = require('./category.model');

const categoryRepository = {
  findAll: () => Category.findAll(),
  findById: (id) => Category.findByPk(id),
  findBySlug: (slug) => Category.findOne({ where: { slug } }),
  create: (data) => Category.create(data),
  update: (id, data) => Category.update(data, { where: { id } }),
  delete: (id) => Category.destroy({ where: { id } }),
};

module.exports = categoryRepository;
