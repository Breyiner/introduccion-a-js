let promisa = new Promise(resolve => {
  setTimeout(() => resolve("Promisa resuelta"), 3000);
});

promisa.then(console.log);