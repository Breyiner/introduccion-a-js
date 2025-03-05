let desde, hasta;
do {
  desde = parseInt(prompt("Ingrese el número que empezará:"));
  hasta = parseInt(prompt("Ingrese el número que terminará:"));
} while (desde >= hasta);

const imprimirNumeros = (desde, hasta) => {
  setTimeout(function imprimir(desde) {
    console.log(desde);
    desde++;
    if(desde <= hasta) setTimeout(imprimir, 1000, desde);
  }, 1000, desde);
}

console.log("setTimeout: ");
imprimirNumeros(desde, hasta);


const imprimirNumeros2 = (desde, hasta) => {
  let identificador = setInterval(() => {
    console.log(desde++);
    if (desde > hasta) clearInterval(identificador);
  }, 1000);
}

setTimeout(() => {
  console.log("setInterval:");
  imprimirNumeros2(desde, hasta);
}, (hasta + 1) * 1000);