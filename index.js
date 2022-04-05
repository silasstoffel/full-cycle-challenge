const { pool } = require('./db');

const express = require('express')
const app = express()
const port = 3000;

const query = `
CREATE TABLE IF NOT EXISTS people (
  id SERIAL,
  name varchar(100) NOT NULL,
  PRIMARY KEY (id)
)`;

pool.query(query, (err, res) => {
    if (err) {
        console.error('An error on execute command in database');
    }    
});


app.get('/', async (req, res) => {
    const number = Math.floor(Math.random() * 999999999);
    const person = `Person ${number}`;
    const command = `INSERT INTO people (name) VALUES ('${person}')`;
    let people = [];
    try {
        await pool.query(command);
        const results = await pool.query('SELECT * FROM people ORDER BY name');
        people = results.rows.map(item => `<li>${item.name}</li>`);
    } catch (err) {
        console.error(err.message);
    }

    const html = `
    <h1>Full Cycle Rocks!</h1>
    <hr/>
    <ul>
        <li><strong>People</strong></li>
        ${people.join('')}
    </ul>
    `;
  res.send(html);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

