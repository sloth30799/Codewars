// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s){
    let [upper, lower, num, special] = [0,0,0,0]
    
    for(let i = 0; i < s.length; i++) {
      if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
        num++
      } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
        upper++
      } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
        lower++
      } else {
        special++
      }
    }
    
    return [upper, lower, num, special]
  }