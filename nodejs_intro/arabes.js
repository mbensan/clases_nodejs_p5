/**
 * POS 0  1  2  3  4  5  6  7  8  9  10
 * FIB 0  1  1  2  3  5  8  13 21 34 55
 */

function fib (pos) {
  if (pos == 0 || pos == 1) {
    return pos
  }
  // si llego hasta acá, quiere decir que pos > 1
  return fib(pos-1) + fib(pos-2)
}

function arabes(num) {
  const primeros15 = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho',
                      'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince']
  if (num <= 15) {
    return primeros15[num]
  }
  else if (num <= 19) {
    const unidades = num - 10;
    return 'dieci' + arabes(unidades)
  }
  else if (num == 20) {
    return 'veinte'
  }
  else if (num <= 29) {
    const unidades = num - 20;
    return 'veinti' + arabes(unidades)
  }
  else if (num <= 99) {
    const decenas = Math.floor(num/10)
    const unidades = num - (decenas*10)

    const decenas_pal = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta',
                         'ochenta', 'noventa']
    
    if (unidades == 0) {
      return decenas_pal[decenas]
    } else {
      return decenas_pal[decenas] + ' y ' + arabes(unidades)
    }
  }
  else {
    return 'NO IMPLEMENTADO'
  }
}

//console.log(arabes(parseInt(process.argv[2])))

console.log(process.argv[2])
