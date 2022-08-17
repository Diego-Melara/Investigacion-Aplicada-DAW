let sum = (a, b) => {  // la llave abre una función multilínea
    let result = parseInt(a) + parseInt(b);
    return result; // si usamos llaves, entonces necesitamos un "return" explícito
  };

  a= prompt("Numero");
  b= prompt("Numero");

  alert("La suma de los dos número es igual a: " + sum(a, b) );
  window.close();