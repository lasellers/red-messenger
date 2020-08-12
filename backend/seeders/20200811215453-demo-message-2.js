'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Messages', [{
          userId: 1,
          title: 'My reply',
          message: 'This is a reply',
          repliedTo: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Messages', 2, {});
  }
};
