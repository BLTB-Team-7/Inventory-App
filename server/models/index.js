const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')


const Item = sequelize.define("item", {
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize.REAL, 
  category: Sequelize.TEXT,
  image: Sequelize.TEXT,
  quantity: Sequelize.REAL,

});

module.exports = {
  db: sequelize,
  Item,
};
