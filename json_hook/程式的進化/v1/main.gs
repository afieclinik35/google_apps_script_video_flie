function doPost(e) {
  console.log(multiply(add(add(1, 2), 3), 4));
}

function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}
