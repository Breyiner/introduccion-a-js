/* Se declaran dos variables let, desde y hasta, las cuales serán las que almacenen el numero con el que se
 inicia la secuencia y el numero donde termina */
let desde, hasta;
// Se crea un do while el cual nos permitirá solicitar nuevamente los datos en caso de no cumplit con la condición
do {
  // se asigna a las variables el dato numero ingresado por el usuario, dicho dato se parsea a entero
  desde = parseInt(prompt("Ingrese el número que empezará:"));
  hasta = parseInt(prompt("Ingrese el número que terminará:"));
  // si el valor de la variable desde es menor o igual al de la variable hasta, se solicitarán de nuevo los datos
} while (desde >= hasta);

// declaramos una función flecha llamada imprimirNumeros que recibe 2 parámetros (la variable desde y hasta)
const imprimirNumeros = (desde, hasta) => {
  // llamamos al método setTimeot para ejecutar luego de 1 segundo la función que creamos como primer argumento
  setTimeout(
    // declaramos una función expresada llamada imprimir que recibe 1 parámetro (la variable desde)
    function imprimir(desde) {
      // imprimimos en consola la variable desde
      console.log(desde);
      // le damos un post-incremento a la variable desde
      desde++;
      // creamos una condición if, la cual determina si el valor de desde es menor o igual al valor de hasta
      if(desde <= hasta) {
        /* en caso de ser verdadero llamamos al método setTimeout de nuevo enviando como primer argumento la 
        llamada a la función imprimir como callback que se ejecutará luego de 1 segundo y enviamos como 3er 
        agumento la variable desde que es el parámetro que recibe la función imprimir */
        setTimeout(imprimir, 1000, desde);
      }
    }, 
  /* el segundo argumento es la cantidad milisegundos que se demora en ejecutarse la función imprimirNumeros
  y como 3er agumento la variable desde que es el parámetro que recibe la función imprimir */
  1000, desde);
}

// imprimimos un mensaje en consola que nos indica que se motrará el proceso del setTimeout
console.log("setTimeout Anidado: ");
// llamamos a la función imprimirNumeros y enviamos como argumentos las variables desde y hasta
imprimirNumeros(desde, hasta);

// declaramos una función flecha llamada ImprimirNumeros2 que recibe 2 parámetros (la variable desde y hasta)
const imprimirNumeros2 = (desde, hasta) => {
  /* declaramos una variable identificador y le asignamos la llamada al método setInterval el cual se ejecutará 
   cada 1 segundo */
  let identificador = setInterval(
    // como primer argumento declaramos una funcion flecha anónima
    () => {
      /* imprimimos en consola la variable desde con un post-incremento para que cada que se ejecute el setInterval
      muestre el numero+1*/
      console.log(desde++);
      // creamos una condición if, la cual determina si el valor de desde es mayor al valor de hasta
      /* En caso de ser verdadero llamamos al método clearInterval y le inviamos como argumento la variable indentificador la cual contiene el método setInterval para finalizar la ejecución de este y que no se cree
      un ciclo infinito*/
      if (desde > hasta) clearInterval(identificador);
  // como segundo argumento enviamos la cantidad de milisegundos que se demora en ejecutarse la función imprimirNumeros2
  }, 1000);
}

// llamamos al método setTimeout para ejecutar una función anónima la cual nos permite ejecutar la función imprimirNumeros2
setTimeout(
  // como primer argumento declaramos una funcion flecha anónima
  () => {
    // imprimimos un mensaje en consola que nos indica que se motrará el proceso del setInterval
    console.log("setInterval:");
    // llamamos a la función imprimirNumeros2 y enviamos como argumentos las variables desde y hasta
    imprimirNumeros2(desde, hasta);
    /*como segundo argumento calculamos la cantidad de milisegundos de cuando se ejecutará la función dentro del 
    setTimeout (al valor de la variable hasta le sumamos uno para que se ejecute 1 segundo luego de que se haya 
    ejecutado el setTimeout anidado y multiplicamos esto por mil para que sea en milisegundos) */
  }, (hasta + 1) * 1000);