const esNegativo = numero => numero < 0;

const some = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) return true;
  }

  return false;
}

let numeros = [1, -2, 3, 51, 5];

let hayUno = some(numeros, esNegativo);

console.log(`Hay un negativo: ${hayUno}`);