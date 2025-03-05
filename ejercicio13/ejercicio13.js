let promesa = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Promise Rechazada"), 1000));
});

promesa.catch(console.error);