function compute(base, height) {
    return `El área es: ${((base*height)/2).toFixed(2)}`; 
  }
  
  function calculateArea() {
    const base = parseInt(document.getElementById("base-request").value);
    const height = parseInt(document.getElementById("height-request").value);
    document.getElementById("result").textContent = compute(base, height);
  }