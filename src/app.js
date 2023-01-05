require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const cors = require('cors');
const db = require('./data/db');
const methodOverride = require('method-override');
const moviesRouter = require('./routes/routes');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/movies', moviesRouter);

const dbConnectionServerUp = async () => {
  try {
    await db.authenticate();
    console.log('Succesfull connection');
    app.listen(port, () => {
      console.log(`Server up running in http://localhost:${port}`);
    });
  } catch (error) {
    console.error(`The error is: ${error}`);
    throw new Error('Error when starting the database');
  }
};
dbConnectionServerUp();
