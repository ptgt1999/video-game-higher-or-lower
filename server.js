const express = require('express');
const routes = require('./routes');
const sequelize = require('./Config/connection.js');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({
  origin:"http://127.0.0.1:3001",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
app.use(express.static(__dirname));


// turn on connection to db and server
/*sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});*/
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
