// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
  return a.filter((x, i) => i === a.indexOf(x))
}
