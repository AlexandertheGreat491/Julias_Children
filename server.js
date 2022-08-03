const path = require('path');
const express = require('express');
<<<<<<< HEAD
//const session = require('express-session');
//const exphbs = require('express-handlebars');
=======
const session = require('express-session');
const exphbs = require('express-handlebars');
>>>>>>> b00fffbf0dabf53dc6e08f8429ae966dc989d5ec

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

<<<<<<< HEAD
//const sess = {
//secret: 'Super duper secret secret',
//cookie:{},
//resave: false,
//saveUninitialized: true,
//store: new SequelizeStore({
//db: sequelize
//})
//};
=======
const sess = {
  secret: 'Super duper secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
>>>>>>> b00fffbf0dabf53dc6e08f8429ae966dc989d5ec

//app.use(session(sess));

//const helpers = require('./utils/helpers);

//const hbs = exphbs.create({helpers});

//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(_dirname, 'public')));

app.use(require('./controllers/'));

// turn on connection to db and server
<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
>>>>>>> b00fffbf0dabf53dc6e08f8429ae966dc989d5ec
});
