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
function countBiggerThanFirst(list) {
  let count = 0;

  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[0]) {
      count++;
    }
  }

  return count;
}

console.log(countBiggerThanFirst(numbers));
document.getElementById("show").addEventListener("click", function () {
  document.getElementById("total").textContent = getTotal(numbers);
  document.getElementById("big").textContent = getLargest(numbers);
  document.getElementById("above").textContent = countBiggerThanFirst(numbers);
});