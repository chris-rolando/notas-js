function compute(base, height) {
  return `El área es: ${((base * height) / 2).toFixed(2)}`;
}

function calculateArea() {
  // obtener datos
  const base = parseInt(document.getElementById("base-request").value);
  const height = parseInt(document.getElementById("height-request").value);
  // calcular() e imprimir el resultado
  document.getElementById("result").innerHTML = compute(base, height);
}
