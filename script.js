const numbers = [2, 3, 9];

function getTotal(list) {
  let total = 0;

  for (let number of list) {
    total += number;
  }

  return total;
}

console.log(getTotal(numbers));
function getLargest(list) {
  let largest = list[0];

  for (let number of list) {
    if (number > largest) {
      largest = number;
    }
  }

  return largest;
}

console.log(getLargest(numbers));