const imprimirResultado = (text) =>{
    document.querySelector("#resultado").innerHTML = `<h3>El resultado es: ${text}</h3>`
};  

const multiplica = () => {
    event.preventDefault();
    let numeroUno=parseFloat(document.getElementById('primer-numero').value);
    let numeroDos=parseFloat(document.getElementById('segundo-numero').value);
    resultado = numeroUno*numeroDos;
    imprimirResultado(resultado);
  }

  const divide = () => {
    event.preventDefault();
    let numeroUno=parseFloat(document.getElementById('primer-numero').value);
    let numeroDos=parseFloat(document.getElementById('segundo-numero').value);
    resultado = numeroUno/numeroDos;
    imprimirResultado(resultado);
  }

  const resta = () => {
    event.preventDefault();
    let numeroUno=parseFloat(document.getElementById('primer-numero').value);
    let numeroDos=parseFloat(document.getElementById('segundo-numero').value);
    resultado = numeroUno-numeroDos;
    imprimirResultado(resultado);
  }

  const suma = () => {
    event.preventDefault();
    let numeroUno=parseFloat(document.getElementById('primer-numero').value);
    let numeroDos=parseFloat(document.getElementById('segundo-numero').value);
    resultado = numeroUno + numeroDos 
    imprimirResultado(resultado);
  }