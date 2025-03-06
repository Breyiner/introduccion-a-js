fetch('../JSON/archivo.json')
    .then(respuesta => respuesta.json())
    .then(info => {
        regex = /^a/i;
        info.forEach(persona => {
            if(regex.test(persona.apellido)) {
                console.log(`${persona.nombre} ${persona.apellido}`);
            }
        });
    });