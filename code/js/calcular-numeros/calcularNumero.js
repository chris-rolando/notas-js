function compute(firstNumber, secondNumber) {
    let message = `El número `;

    if(firstNumber !== secondNumber){
        if (firstNumber>secondNumber) {
            message = `${firstNumber} es mayor que ${secondNumber}`;
        }else{
            message = `${secondNumber} es mayor que ${firstNumber}`;
        }
    }else{
        message = `${firstNumber} es igual que ${secondNumber}`;
    }
    
    return message;
  }
  
  function calculateNumber() {
    // obtener datos
    const firstNumber = parseInt(document.getElementById("first-request").value);
    const secondNumber = parseInt(document.getElementById("second-request").value);
    // calcular() e imprimir el resultado
    document.getElementById("result").innerHTML = compute(firstNumber, secondNumber);
  }