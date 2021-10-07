'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'John',
          last_name: 'Wick',
          phone_number: '345345',
          password: 'encrypted',
          email: 'dsfgdsh@gmail.com',
          score: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'John',
          last_name: 'Wick',
          phone_number: '56754',
          password: 'encrypted',
          email: 'dsfgd754sh@gmail.com',
          score: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'John',
          last_name: 'Wick',
          phone_number: '367855345',
          password: 'encrypted',
          email: 'dsfdfgdfhnsh@gmail.com',
          score: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
