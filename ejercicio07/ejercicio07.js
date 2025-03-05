const esMayorDeEdad = edad => edad >= 18;

const find = (arreglo, callback) => {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) return arreglo[i];
  }

  return undefined;
}

let edades = [3, 10, 18, 20];
let edadPrimero = find(edades, esMayorDeEdad);

console.log(`El primer mayor de edad tiene ${edadPrimero} años`);