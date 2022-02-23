/**
 * Este es un programa interactivo para crear una lista de compras
 */
// depedencias
const readline = require('readline')
const fs = require('fs').promises

// configuraciones iniciales
const rl = readline.createInterface(
  { input: process.stdin, output:process.stdout }
);
const nombre_archivo = 'listas/' + process.argv[2]

// funciones
function preguntar () {
  rl.question('¿Qué desea agregar a la lista?\n> ', async function(resp) {
    resp = resp.toLowerCase()
    
    if (resp == 'nada') {
      console.log('Lista terminada')
      return rl.close()
    }
    // Acá leemos, escribimos, agregamos, etc ...
    let contenido = await fs.readFile(nombre_archivo, 'utf-8')
    contenido = `${contenido}\n${resp}`
    await fs.writeFile(nombre_archivo, contenido, 'utf-8')

    preguntar()
  })
}

async function iniciar () {
  await fs.writeFile(nombre_archivo, 'utf-8')
  preguntar()
}
iniciar()
//preguntar()

