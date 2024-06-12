const express = require('express');
const routes = require('./routes');
const sequelize = require('./Config/connection.js');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({
  origin:"http://127.0.0.1:5500",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
