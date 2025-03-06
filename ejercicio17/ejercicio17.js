async function leerJson() {
    const leer = await fetch('../JSON/archivo.json');

    const informacion = await leer.json();

    console.log("Las personas con nombre de más de 5 letras son:")
    informacion.forEach(persona => {
        if(persona.nombre.length > 5) console.log(persona.nombre); 
    });
}

leerJson();