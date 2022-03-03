const express = require('express')
const send_email = require('./email.js')
const fs = require('fs').promises

const app = express()

app.use(express.static('public'))

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) )

app.post('/email', async (req, res) => {
  console.log(req.body);
  //send_email(req.body.email, 'Probando la funcionalidad', req.body.contenido)
  // guardamos el email
  let db = await fs.readFile('db.json', 'utf-8')
  db = JSON.parse(db)

  db.emails.push({
    receivers: req.body.email,
    subject: 'Probando la funcionalidad',
    content: req.body.contenido
  })

  await fs.writeFile('db.json', JSON.stringify(db), 'utf-8')

  res.send('email enviado')
})

app.get('/email', async (req, res) => {
  let db = await fs.readFile('db.json', 'utf-8')
  db = JSON.parse(db)
  res.json(db)
})


app.listen(3000, ()=> console.log('Servidor ejecutando en puerto 3000'))
