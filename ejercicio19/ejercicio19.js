const primerPromesa = new Promise(resolve => {
    setTimeout(resolve, 1000);
});

const segundaPromesa = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
});

const tercerPromesa = new Promise(resolve => {
    setTimeout(resolve, 2000);
});

Promise.allSettled([primerPromesa, segundaPromesa, tercerPromesa])
    .then((resultados) => {
        console.log("Estado de las promesas: ");
        resultados.forEach(estado => console.log(estado.status));
    });