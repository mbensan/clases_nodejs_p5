const readline = require('readline')
const fs = require('fs').promises

const rl = readline.createInterface(
  { input: process.stdin, output:process.stdout }
);

function preguntar () {
  rl.question('¿Que acción desea ejecutar?\n~ ', async function(resp) {
    console.log('El usuario eligió ' + resp)

    if (resp == 'NADA') {
      return rl.close()
    }
    // Acá leemos, escribimos, agregamos, etc ...
    preguntar()
  })
}
preguntar()

