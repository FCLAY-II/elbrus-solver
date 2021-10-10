"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          category_id: 1,
          task: "Напишите функцию которая принимает на вход 2 числа и возвращает их произведение.",
          answer: "10",
          args: "5, 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: "Напишите функцию которая принимает на вход 2 числа и возвращает их сумму.",
          answer: "7",
          args: "5, 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: "Напишите функцию которая принимает на вход числе и возводит его в степень 3.",
          answer: "27",
          args: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: "Напишите функцию которая принимает на вход `name` в виде строки, а возвращет `Привет name!`",
          answer: "Привет Маша!",
          args: "Маша",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 1,
          task: "Напишите функцию которая принимает на вход строку и возвращает её в верхнем регистре.",
          answer: "HELLO WORLD!",
          args: "hello world!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: "Напишите функцию которая принимает на вход строку и возвращает последние 3 символа.",
          answer: "бро",
          args: "Добро",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: "Напишите функцию которая принимает на вход строку и возвращает эту же строку в перевернутом виде.",
          answer: "Добро",
          args: "орбоД",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: "Напишите функцию которая принимает на вход строку и возвращает ее центральный символ.",
          answer: "т",
          args: "Бетон",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: "Напишите функцию которая принимает на вход 2 числа и возвращает большее из них",
          answer: "Привет Маша!",
          args: "Маша",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category_id: 2,
          task: "Напишите функцию которая принимает на вход число и возвращает его факториал.",
          answer: "6",
          args: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
