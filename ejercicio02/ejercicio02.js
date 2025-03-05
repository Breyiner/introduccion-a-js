let i = 0;

setTimeout(() => alert(i), 100);

// asumimos que el tiempo para ejecutar esa función es > 100 ms
for (let j = 0; j < 100000000; j++) {
  i++
}

