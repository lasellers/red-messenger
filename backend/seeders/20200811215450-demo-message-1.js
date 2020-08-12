'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Messages', [{
          userId: 1,
          title: 'My first post',
          message: 'Lorem Ipsum',
          repliedTo: null,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Messages', 1, {});
  }
};
