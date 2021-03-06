const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Load env vars
require('dotenv').config({ path: 'config/config.env' });

const app = express();

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB CONNECTION ERROR: ', err));

// import routes
const authRoutes = require('./routes/auth.routes');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL
    })
  );
}

// middleware
app.use('/api/auth', authRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
