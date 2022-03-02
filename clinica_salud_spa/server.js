const express = require('express');
const uuid = require('uuid');

const app = express()
app.use(express.static('public'))

const usuarios = [
  {
    nombre: 'Pedro',
    apellido: 'Fuentes',
    registro: '2 de Marzo de 2022 10:51:20',
    id: 'sdfessegsgdg',
    cita: '2022-05-03'
  }
]

app.get('/usuarios', (req, res) => {
  return express.json(usuarios)
})

app.listen(3000, () => console.log('Ejecutando en puerto 3000'))