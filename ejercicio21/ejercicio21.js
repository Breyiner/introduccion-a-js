try {
    fetch('../JSON/archivo.json')
        .then(respuesta => respuesta.json())
        .then(info => console.log(info));
} catch (error) {
    console.log(`Error encontrado: ${error}`);
}