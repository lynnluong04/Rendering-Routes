'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      { username: 'coolguy48', password: 'superSecretPassword48!', email: 'coolGuy48@gmail.com', biography: "Hey yall! I'm your super cool guy, 'coolGuy48'! I'm the best climber in town and everyone knows it!", createdAt: new Date(), updatedAt: new Date()  }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options, null, {});
  }
};
