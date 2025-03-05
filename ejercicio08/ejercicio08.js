const esMayorDeEdad = edad => edad >= 18;

const findIndex = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) return i;
  }

  return undefined;
}

let edades = [3, 10, 18, 20];
let indiceEdadPrimero = findIndex(edades, esMayorDeEdad);

console.log("Edades:");
edades.forEach(edad => {
  console.log(edad);
});

console.log(`El indice del primer mayor de edad es ${indiceEdadPrimero}`);