const express = require('express');
const routes = require('./controllers');

const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const path = require('path');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super duper secret secret',
  cookie: {
    // Session will automatically expire after 20 minutes
    // expires: 20 * 60 * 1000,
  },
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

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
