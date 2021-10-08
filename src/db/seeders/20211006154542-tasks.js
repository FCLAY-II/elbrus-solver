'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          category_id: 1,
          task: 'Найдите произведение двух чисел.',
          answer: '10',
          args: '5, 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: 'Найдите сумму двух чисел.',
          answer: '7',
          args: '5, 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: 'Найдите наиболшее число в массиве.',
          answer: '7',
          args: '[5, 6, 65, 32, 5, 76]',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },
   
  

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Tasks', null, {});
  }
};
