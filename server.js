const express = require('express');
<<<<<<< HEAD
const routes = require('./controllers');
=======
const exphbs = require('express-handlebars');
>>>>>>> 8aea7298e56f488b0dae6d93202b1f4b4c6e83b6

const helpers = require('./utils/helpers');
//const auth = require('../../utils/auth);

const sequelize = require('./config/connection');
<<<<<<< HEAD
const path = require('path');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super duper secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => console.log('Now listening'));
});
