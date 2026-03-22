'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // TODO: insertar datos de ejemplo para desarrollo
    // await queryInterface.bulkInsert('products', [...]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
