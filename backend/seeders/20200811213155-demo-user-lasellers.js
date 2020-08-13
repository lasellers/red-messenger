'use strict';

let bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
            name: 'Lewis Sellers',
            email: 'lasellers@gmail.com',
            password: await bcrypt.hash('foo', 10),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', 1, {});
    }
};
