// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }