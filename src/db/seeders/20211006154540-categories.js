'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Categories',
      [
        {
          kata: '8kyu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kata: '7kyu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          kata: '7kyu',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
