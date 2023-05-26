const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

const port = 3000;
app.use(cors({
  origin: '*'
}));


const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'toor',
  database: 'db1'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API is working');
});

app.use(express.json());

app.post('/driver', (req, res) => {
  const body = req.body;
  const query = `INSERT INTO user(firstName, lastName, email) VALUES ('${body.firstName}', '${body.lastName}','${body.email}');`;

  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error('Error inserting record: ', err);
      res.status(500).send('Error inserting record');
      return;
    }
    console.log('1 record inserted');
    //res.send('1 record inserted');
    res.json({ message: '1 record inserted' });
  });
});

app.post('/usuario', (req, res) => {
  const body = req.body;
  const query = `INSERT INTO usuario(nombre, apellido, correo_electronico, hash_contrasenia) VALUES ('${body.firstName}', '${body.lastName}','${body.email}','${body.password}');`;

  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error('Error inserting record: ', err);
      res.status(500).send('Error inserting record');
      return;
    }
    console.log('1 record inserted');
    //res.send('1 record inserted');
    res.json({ message: '1 record inserted' });
  });
});

app.post('/conductor', (req, res) => {
  const body = req.body;
  const query = `INSERT INTO conductor(nombre, apellido, correo_electronico, hash_contrasenia, categoria_licencia, sexo, ci) VALUES ('${body.firstName}', '${body.lastName}','${body.email}','${body.password}','${body.driversCategory}','${body.gender}','${body.ci}');`;

  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error('Error inserting record: ', err);
      res.status(500).send('Error inserting record');
      return;
    }
    console.log('1 record inserted');
    //res.send('1 record inserted');
    res.json({ message: '1 record inserted' });
  });
});

app.post('/automovil', (req, res) => {
  const body = req.body;
  const query = `INSERT INTO automovil(placa, marca, anio, chasis) VALUES ('${body.licensePlate}', '${body.brand}','${body.year}','${body.chasis}');`;

  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error('Error inserting record: ', err);
      res.status(500).send('Error inserting record');
      return;
    }
    console.log('1 record inserted');
    //res.send('1 record inserted');
    res.json({ message: '1 record inserted' });
  });
});

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`);
});

