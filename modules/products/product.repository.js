const Product = require('./product.model');

const productRepository = {
  findAll: () => Product.findAll(),
  findById: (id) => Product.findByPk(id),
  create: (data) => Product.create(data),
  update: (id, data) => Product.update(data, { where: { id } }),
  delete: (id) => Product.destroy({ where: { id } }),
};

module.exports = productRepository;
