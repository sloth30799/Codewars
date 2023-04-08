// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// a = new Vector([1, 2, 3])
// b = new Vector([3, 4, 5])
// c = new Vector([5, 6, 7, 8])

// a.add(b)      # should return a new Vector([4, 6, 8])
// a.subtract(b) # should return a new Vector([-2, -2, -2])
// a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
// a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c)      # throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user-provided equals method.

class Vector {
  public components: number[]

  constructor(components: number[]) {
    this.components = components
  }

  add(otherVector: Vector) {
    try {
      if (this.components.length !== otherVector.components.length)
        throw new Error()

      let result: number[] = []
      for (let i = 0; i < this.components.length; i++) {
        let sum = this.components[i] + otherVector.components[i]
        result.push(sum)
      }

      return new Vector(result)
    } catch (error) {
      throw new Error("The lengths don't match")
    }
  }

  subtract(otherVector: Vector) {
    try {
      if (this.components.length !== otherVector.components.length)
        throw new Error()

      let result: number[] = []
      for (let i = 0; i < this.components.length; i++) {
        let minus = this.components[i] - otherVector.components[i]
        result.push(minus)
      }
      return new Vector(result)
    } catch (error) {
      throw new Error("The lengths don't match")
    }
  }

  dot(otherVector: Vector) {
    try {
      if (this.components.length !== otherVector.components.length)
        throw new Error()

      let result: number[] = []
      for (let i = 0; i < this.components.length; i++) {
        let product = this.components[i] * otherVector.components[i]
        result.push(product)
      }

      return result.reduce((total, x) => total + x)
    } catch (error) {
      throw new Error("The lengths don't match")
    }
  }

  norm() {
    let result: number[] = []
    for (let i = 0; i < this.components.length; i++) {
      let power = this.components[i] ** 2
      result.push(power)
    }

    return Math.sqrt(result.reduce((total, x) => total + x))
  }

  equals(otherVector: Vector) {
    let result: boolean[] = []
    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] === otherVector.components[i]) result.push(true)
      else result.push(false)
    }

    return result.every((value) => value === true)
  }

  toString() {
    let string = this.components.join(",")

    return `(${string})`
  }
}

let a = new Vector([1, 2, 3])
let b = new Vector([1, 2, 3])

console.log(a.add(b))
