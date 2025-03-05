async function promesa() {
  
  let respuesta = await new Promise(resolve => {
    setTimeout(() => resolve("Operación completada"), 1000);
  })

  return respuesta;
}

promesa().then(console.log);