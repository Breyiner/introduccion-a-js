const esNumero = numero => {
  if (typeof numero === "number") {
    return true;
  }
  return false;
}

const every = (arreglo, callback) => {
  // arreglo.forEach(numero => {
  // });
  for (let i = 0; i < arreglo.length; i++) if (!callback(arreglo[i])) return false;
  return true;
}

let arreglo = [1, 2, "3", 4, 5];
let sonNumeros = every(arreglo, esNumero);

console.log(`Todos son números: ${sonNumeros}`);