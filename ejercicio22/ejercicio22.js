const aprendiz = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {
    set(objeto, propiedad, valor) {
        objeto[propiedad] = valor;
    }
}

const breyner = new Proxy(aprendiz, manejador);
breyner.nombre = "Breyner";
breyner.apellido = "Acosta";
breyner.edad = 17;

console.log(breyner);