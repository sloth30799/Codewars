// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let xStr, xNum, index
    xStr = x.split(' ')
    xNum = xStr.map(x => x.split('').reduce((total,x) => total + x.charCodeAt(0) - 96, 0))
    index = xNum.indexOf(Math.max(...xNum))
    return xStr[index]
  }