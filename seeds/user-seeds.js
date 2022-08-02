const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'josesmith1',
    email: 'josesmith123@gmail.com',
    password: 'password123',
  },
  {
    username: 'winston123',
    email: 'schnauzer123@hotmail.com',
    password: 'password123',
  },
  {
    username: 'linkinpark2000',
    email: 'linkinpark12@gmail.com',
    password: 'password123',
  },
  {
    username: 'lacroix1234',
    email: 'lemons123@gmail.com',
    password: 'password123',
  },
  {
    username: 'battlefield5',
    email: 'reconguy23@gmail.com',
    password: 'password123',
  },
  {
    username: 'coffeeaddict45',
    email: 'espresso123@gmail.com',
    password: 'password123',
  },
  {
    username: 'popcornatnight1',
    email: 'popcorn22@gmail.com',
    password: 'password123',
  },
  {
    username: 'orangejuice2',
    email: 'fruitytooty123@gmail.com',
    password: 'password123',
  },
  {
    username: 'thaicurry3',
    email: 'redcurry33@gmail.com',
    password: 'password123',
  },
  {
    username: 'awesomeschnauzer2',
    email: 'minischnauzer123@gmail.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
