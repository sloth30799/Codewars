// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const newArr = array.map((x) => x.toString().length)
  return array[newArr.indexOf(Math.max(...newArr))]
}
