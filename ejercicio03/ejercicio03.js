let multiplicar = numero => numero * 3;

const map = (arreglo, callback) => {
  let segundoArreglo = [];

  arreglo.forEach(numero => {
    segundoArreglo.push(callback(numero));
  });

  return segundoArreglo;
}

let arreglo = [1, 2, 3, 4, 5];
let segundoArreglo = map(arreglo, multiplicar);

console.log("Arreglo original:");
arreglo.forEach(numero => {
  console.log(numero)
});

console.log("Arreglo callback:");
segundoArreglo.forEach(numero => {
  console.log(numero)
});