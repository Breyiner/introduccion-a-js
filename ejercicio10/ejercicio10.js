function delay(ms) {
  let promesa = new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
  return promesa;
}

delay(3000).then(() => alert("se ejecuta después de 3 segundos"));
