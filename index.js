
// O(1) -> Constant Time
function constantOperations(input) {
  let operations = 0;

  const lastEl = input.at(-1);
  console.log(lastEl);
  input[0] = lastEl;
  operations++;
  return operations;
}
// O(n) -> Linear Time
function linearOperations(input) {
  let operations = 0;

  for (let i = 0; i < input.length; i++) {
    operations++;
  }
  return operations;
}

// O(log n) -> Logarithmic Time
function logOperations(input) {
  let operations = 0;
  let i = 1;
  while (i < input.length) {
    i = i * 2;
    operations++;
  }
  return operations;
}

// O(n^2) -> Quadratic Time
function quadOperations(input) {
  let operations = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      operations++;
    }
  }
  return operations;
}

const input = [1, 2, 3, 4, 5, 6];
console.log(constantOperations(input));
console.log(linearOperations(input));
console.log(logOperations(input));
console.log(quadOperations(input));
