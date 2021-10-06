'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          category_id: 1,
          task: 'You must solve me',
          answer: 'expected answer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: 'You must solve me',
          answer: 'expected answer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 3,
          task: 'You must solve me',
          answer: 'expected answer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
   
  

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Tasks', null, {});
  }
};
