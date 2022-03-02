const yargs = require('yargs') // versión antigua
const chalk = require('chalk') // versión antigua
//import Yargs from 'yargs' // require pero más moderno
//import chalk from 'chalk'



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
    if (isNaN(args.veces)) {
      console.log(chalk.red('ERROR: Veces debe ser un número'))
      return
    }
    const veces = Number(args.veces)
    if (veces < 0) {
      console.log(chalk.red(chalk.bold('Error: ') +  'Veces negativas'))
      return
    }
    for (let i=0; i<veces; i++) {
      console.log(chalk.bgYellow(chalk.cyan('PONG')))
    }
  }
).help().argv

