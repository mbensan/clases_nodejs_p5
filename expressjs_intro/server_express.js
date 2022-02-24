// import express from 'expresss';
const express = require('express')
const moment = require('moment')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Esta es nuestra App')
})

app.get('/contacto', (req, res) => {
  res.send(`
    <form>
      <label>coloque su Email</label>
      <input type="email">
      <input type="submit">
    </form>
  `)
})

app.get('/nosotros', (req, res) => {
  res.send('Nosotros')
})

app.get('/hora', (req, res) => {
  res.send(moment().format('DD MMMM YYYY, hh:mm:ss a'))
});

app.get('*', (req, res) => {
  res.send('Página no encontrada')
})

app.listen(3000, function() {
  console.log('Servidor ejecutando desde ExpressJS');
})
