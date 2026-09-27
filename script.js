const numbers = [2, 3, 9];

function getTotal(list) {
  let total = 0;

  for (let number of list) {
    total += number;
  }

  return total;
}

console.log(getTotal(numbers));