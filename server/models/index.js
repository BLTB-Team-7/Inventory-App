const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')


const Item = sequelize.define("item", {
  name: Sequelize.STRING,
  Description: Sequelize.STRING,
  Price: Sequelize.FLOAT, // Double check
  Category: Sequelize.STRING,
  Image: Sequelize.STRING,

});

module.exports = {
  db: sequelize,
  Item
};
