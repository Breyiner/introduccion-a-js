const primerPromesa = new Promise(resolve => {
    setTimeout(resolve, 1000);
});

const segundaPromesa = new Promise(resolve => {
    setTimeout(resolve, 3000);
});

const tercerPromesa = new Promise(resolve => {
    setTimeout(resolve, 2000);
});

Promise.all([primerPromesa, segundaPromesa, tercerPromesa])
    .then(() => console.log("Se cumplieron todas las promesas"));