// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    
    str = str.toLowerCase()
    
    str.split('').forEach((x,i) => {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 && !vowels.includes(x)) {
        count++
      }
    })
    return count
  }