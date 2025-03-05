const esPar = numero => numero % 2 == 0;

const filter = (arreglo, callback) => {
  let pares = [];

  arreglo.forEach(numero => {
    if (callback(numero)) pares.push(numero);
  });

  return pares;
}

let arreglo = [1, 2, 3, 4, 5];
let pares = filter(arreglo, esPar);

console.log("Arreglo original:");
arreglo.forEach(numero => {
  console.log(numero)
});

console.log("Pares:");
pares.forEach(numero => {
  console.log(numero)
});