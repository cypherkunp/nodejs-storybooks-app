const expressHandlebars = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

// DATABASE
//const connectDB = require('./config/db');
//connectDB();

// LOAD CONFIG
dotenv.config({ path: './config/config.env' });

// PASSPORT CONFIG
require('./auth/passport');
// INIT
const app = express();
const PORT = process.env.PORT || 3000;

// LOGGING
if (process.env.NODE_ENV) {
  app.use(morgan('dev'));
}

// VIEW ENGINE
app.engine('.hbs', expressHandlebars({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', require('./routes/index'));

// SERVER
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});
