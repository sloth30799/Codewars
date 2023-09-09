// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//  code
function findAverage(array) {
    let length = array.length
    
    if (length <= 0) {
      return 0
    } else {
      array = array.reduce((total, x) => total + x, 0)
      return array / length
    }
    
  }
