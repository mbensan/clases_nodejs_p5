const vecinos = [
  {
    id: '1234',
    nombre: 'Pedro'
  },
  {
    id: '4567',
    nombre: 'Ana'
  },
  {
    id: '9873',
    nombre: 'Jean'
  }
]

const gastos = [
  {
    vecino_id: '1234',
    nombre: 'Tallarines',
    costo: 690
  },
  {
    vecino_id: '9873',
    nombre: 'Hervidor',
    costo: 12990
  },
  {
    vecino_id: '9873',
    nombre: 'Vasos',
    costo: 9990
  },
  {
    vecino_id: '4567',
    nombre: 'Pollo Frito',
    costo: 4900
  },
  {
    vecino_id: '1234',
    nombre: 'Sandía',
    costo: 8000
  },
  {
    vecino_id: '4567',
    nombre: 'Melón Tuna',
    costo: 3990
  }
]
/* Solución Fea
for (let i=0; i<vecinos.length; i++) {
  let total_i = 0
  for (let j=0; j<gastos.length; j++) {
    if (gastos[j].vecino_id == vecinos[i].id) {
      total_i += gastos[j].costo
    }
  }
  console.log(`${vecinos[i].nombre} ha pagado ${total_i}`);
}
*/

/** Solución mas o menos 
for (let vecino of vecinos) {
  let total_i = 0
  for (let gasto of gastos) {
    if (gasto.vecino_id == vecino.id) {
      total_i += gasto.costo
    }
  }
  console.log(`${vecino.nombre} ha pagado ${total_i}`);
}
*/

/** Solución elegante */
vecinos.map(vecino => {
  const gastos_vec = gastos.filter(gasto => gasto.vecino_id == vecino.id)
                     .map(gasto => gasto.costo).reduce((v1, v2) => v1+v2)
  console.log(`${vecino.nombre} ha gastado ${gastos_vec}`);               
})
