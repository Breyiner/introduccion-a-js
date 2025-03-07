async function bucleProcesar(arreglo, callback) {
    for (const elemento of arreglo) {
        await callback(elemento).then(alert);
    }
};

function procesar(elemento) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Elemento ${elemento} procesado.`), 1000);
    });
}

let arreglo = [1,2,3,4,5,6,7,8,9,10];

bucleProcesar(arreglo,procesar);