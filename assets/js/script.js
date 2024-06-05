const express = require('express');
const db = require('../db.js');

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM gamescores');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
const result = db.query('SELECT * FROM gamescores');
test();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

async function test(){
    const result = await db.query('SELECT * FROM gamescores'); 
    console.log(result.rows[0]);
}