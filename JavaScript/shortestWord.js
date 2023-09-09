// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  s = s.split(' ')
  s = s.map(x => x.length)
  return Math.min(...s)
}
