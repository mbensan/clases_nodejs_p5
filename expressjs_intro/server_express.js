// import express from 'expresss';
const express = require('express')
const moment = require('moment')
const fs = require('fs').promises
const app = express()

// Para manejo de archivos estáticos
app.use(express.static('public'))

// Se configura manejo de formularios
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

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

app.get('/crear', async (req, res) => {
  console.log(req.query)
  // Acá vamos a colocar nuestro código
  const nombre_archivo = `archivos/${req.query.nombre}.txt`
  const contenido = `${moment().format('DD-MM-YYYY')} \n${req.query.contenido}`
  
  await fs.writeFile(nombre_archivo, contenido, 'utf-8')
  res.send('Archivo creado')
})

app.get('/leer', async (req, res) => {
  try {
    await fs.readFile('archivos/inexistente.txt')
  } catch (error) {
    if (error.code = 'ENOENT'){
      return res.send('Archivo inexistente')
    }
  }
  res.send('Archivo Leído')
});

const destinos = []

app.post('/destinos', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  destinos.push({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  })
  res.send('Destino creado')
});

app.get('/destinos', (req, res) => {
  // ejemplo de cómo retornar un JSON
  res.json({destinos: destinos})
});

app.get('*', (req, res) => {
  res.send('Página no encontrada')
})

app.listen(3000, function() {
  console.log('Servidor ejecutando desde ExpressJS');
})
