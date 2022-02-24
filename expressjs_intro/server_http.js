const http = require('http');

// primero creamos el servidor
const app = http.createServer((req, res) => {
  if (req.url == '/') {

    res.writeHead(200);
    res.end('Bienvenidos a nuestra App')

  } else if (req.url == '/contacto') {

    res.writeHead(200);
    res.end(`
      <form>
        <label>coloque su Email</label>
        <input type="email>
        <input type="submit">
      </form>
    `)

  } else if (req.url == '/nosotros') {

    res.writeHead(200);
    res.end('Nosotros')

  } else {

    res.writeHead(404);
    res.end('Página no encontrada')
  }
})

// después lo ejecutamos
const PORT = 3001
app.listen(PORT)
console.log(`Servidor andando en el puerto ${PORT}`);
