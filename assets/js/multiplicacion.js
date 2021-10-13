//Pidiendo al usuario un numero
const number = parseInt(prompt("Ingresa un numero", 5));

//Validando que el numero sea entre 1 y 20
let validacion = (number) => {
  if (number >= 1 && number <= 20) {
    //Calculando y imprimiendo la multiplicación
    for (let i = 1; i <= number; i++) {
      document.write(`${i} x ${number} = ${number * i} <br>`);
    }
  } else {
    return alert("Ingresa un numero entre el 1 y el 20");
  }
};
validacion(number);

//Calculando el factorial del numero ingresado

const factorial = (number) => {
  for (let i = 1; i <= number; i++) {
    let acumulador = 1;
    for (let j = 1; j <= i; j++) {
      acumulador = acumulador * j;
    }
    document.write(`El factorial de ${i} es: ${acumulador} <br>`);
  }
};
factorial(number);
