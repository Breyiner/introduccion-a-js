let promesa = new Promise(resolve => {
    setTimeout(() => resolve({inicio: 1, acumulador: 0}), 1000);
});

promesa
    .then(({inicio, acumulador}) => {
        acumulador += inicio;
        alert(inicio++)
        return new Promise(resolve => {
            setTimeout(() => resolve({inicio: inicio, acumulador: acumulador}), 1000);
        })
    })
    .then(({inicio, acumulador}) => {
        acumulador += inicio;
        alert(inicio++)
        return new Promise(resolve => {
            setTimeout(() => resolve({inicio: inicio, acumulador: acumulador}), 1000);
        })
    }).then(({inicio, acumulador}) => {
        acumulador += inicio;
        alert(inicio)
        return new Promise(resolve => {
            setTimeout(() => resolve(acumulador), 1000);
        })
    }).then(final => {
        alert(`El resultado final es ${final}`);
    });