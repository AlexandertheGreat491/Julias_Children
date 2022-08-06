const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userdata = [
  {
    username: 'josesmith1',
    email: 'josesmith123@gmail.com',
    first_name: 'joseph',
    last_name: 'smith',
    password: 'password123',
  },
  {
    username: 'winston123',
    first_name: 'Winston',
    last_name: 'Schnauzer',
    email: 'schnauzer123@hotmail.com',
    password: 'password123',
  },
  {
    username: 'linkinpark2000',
    first_name: 'Bob',
    last_name: 'Jones',
    email: 'linkinpark12@gmail.com',
    password: 'password123',
  },
  {
    username: 'lacroix1234',
    first_name: 'Fred',
    last_name: 'Smith',
    email: 'lemons123@gmail.com',
    password: 'password123',
  },
  {
    username: 'battlefield5',
    first_name: 'Molly',
    last_name: 'Johnson',
    email: 'reconguy23@gmail.com',
    password: 'password123',
  },
  {
    username: 'coffeeaddict45',
    first_name: 'George',
    last_name: 'Anderson',
    email: 'espresso123@gmail.com',
    password: 'password123',
  },
  {
    username: 'popcornatnight1',
    first_name: 'Carlos',
    last_name: 'Jorgenson',
    email: 'popcorn22@gmail.com',
    password: 'password123',
  },
  {
    username: 'orangejuice2',
    first_name: 'Emily',
    last_name: 'Maple',
    email: 'fruitytooty123@gmail.com',
    password: 'password123',
  },
  {
    username: 'thaicurry3',
    first_name: 'Adrian',
    last_name: 'Miller',
    email: 'redcurry33@gmail.com',
    password: 'password123',
  },
  {
    username: 'awesomeschnauzer2',
    first_name: 'Mike',
    last_name: 'Birch',
    email: 'minischnauzer123@gmail.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
