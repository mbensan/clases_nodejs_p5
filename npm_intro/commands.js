//import yargs from 'yargs'
const yargs = require('yargs')

yargs.command(
  // nombre del comando
  'saludar',
  // descripción
  'este comando saluda a la gente',
  // opciones del comando
  {
    nombre: {
      describe: 'Opción para definir el nombre de la persona por saludar',
      demand: true,
      alias: 'n'
    }
  },
  // la acción del comando
  function (args) {
    console.log(`Hola ${args.nombre}, cómo estás?`);
  }
).help().argv

yargs.command(
  // nombre del comando
  'ping',
  // descripción
  'este comando escribe "pong" varias veces',
  // opciones del comando
  {
    veces: {
      describe: 'Opción para definir el número de PONGs',
      demand: true,
      alias: 'v'
    }
  },
  // la acción del comando
  function (args) {
    const veces = parseInt(args.veces)
    if (veces < 0) {
      console.log('Error. Veces negativas')
      return
    }
    for (let i=0; i<veces; i++) {
      console.log('PONG')
    }
  }
).help().argv

