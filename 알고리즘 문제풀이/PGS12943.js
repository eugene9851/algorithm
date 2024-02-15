let count = 0;

function calculate(number) {
  if (number === 1) return count;
  if (count === 500) return -1;

  if (number % 2 === 0) {
    count++;
    return calculate(number / 2);
  } else {
    count++;
    return calculate(number * 3 + 1);
  }
}

console.log(calculate(1));
