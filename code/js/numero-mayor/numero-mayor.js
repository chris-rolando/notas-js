function compute(numberList) {
  let biggerNumber = numberList[0];

  for (i = 0; i < numberList.length; i++) {
    if (numberList[i] >= biggerNumber) {
      biggerNumber = numberList[i];
    }
  }
  return `El número mayor es ${biggerNumber}`
}

function getBiggerNumber() {
  const numberList = [10, 3, 7, 8, 88, 23, 69, 101, 16, 64, 90, 47];
  document.getElementById("result").innerHTML = compute(numberList);
}
