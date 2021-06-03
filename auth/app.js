require('dotenv').config();
const express = require('express');
const Cors = require('cors');

const app = express();
const CartRoutes = require('./api/AuthRoutes');

app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CartRoutes);

// Handle errors
app.use((err, _req, res) => {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(process.env.PORT || 80, () => {
  console.log('Server started');
});

module.exports = app;
