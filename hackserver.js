const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'your_database_name'
});

db.connect(err => {
  if (err) {
    console.error(' MySQL connection error:', err);
    return;
  }
  console.log(' Connected to MySQL');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/register', (req, res) => {
  const { firstname, lastname, standard, school, board } = req.body;

  if (!firstname || !lastname || !standard || !school || !board) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const sql = `INSERT INTO students (firstname, lastname, standard, school, board) VALUES (?, ?, ?, ?, ?)`;
  const values = [firstname, lastname, standard, school, board];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(' Insert error:', err);
      return res.status(500).json({ message: 'Database insert failed.' });
    }
    res.status(200).json({ message: ' Registration successful!' });
  });
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
