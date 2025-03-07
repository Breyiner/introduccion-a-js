const aprendiz = {
    nombre: "",
    apellido: "",
    edad: 0,
    email: "",
    fechaNacimiento: ""
}

const manejador = {
    set(objeto, propiedad, valor) {

        let regexTexto = /^[\D\s]+$/gi;
        let regexEdad = /^[0-9]{2}$/;
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let regexFecha = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{4})$/;
        let regexEspacios = /^\s|\s$/;

        if ((propiedad == "nombre" || propiedad == "apellido") && !regexTexto.test(valor)) {
            return console.error(`La propiedad ${propiedad} solo acepta letras y espacios en blanco entre nombres.`);
        }
        if (propiedad == "edad" && !regexEdad.test(valor) || valor < 0) {
            return console.error(`La propiedad ${propiedad} solo acepta números y valores mayores que cero y de dos cifras.`);
        }
        if(propiedad == "email" && !regexEmail.test(valor)){
            return console.error(`La propiedad ${propiedad} solo acepta correos electrónicos válidos.`);
        }

        if (propiedad == "fechaNacimiento" && !regexFecha.test(valor)) {
            return console.error(`La propiedad ${propiedad} solo acepta fechas en formato dd/mm/aaaa.`);
        }

        if (regexEspacios.test(valor)) {
            return console.error("Ninguna propiedad acepta espacios en blanco al principio o al final.");
        }

        objeto[propiedad] = valor;
    }
}

const breyner = new Proxy(aprendiz, manejador);
breyner.nombre = "Breyner";
breyner.apellido = "Acosta";
breyner.edad = 17;
breyner.email = "breyneracosta7@gmail.com";
breyner.fechaNacimiento = "12/05/2007";

console.log(breyner);