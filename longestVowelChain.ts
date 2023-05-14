// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

export function solve(s: string): number {
  const vowels: Set<string> = new Set(["a", "e", "i", "o", "u"])
  let max_length: number = 0
  let curr_length: number = 0
  for (const c of s) {
    if (vowels.has(c)) {
      curr_length += 1
      max_length = Math.max(max_length, curr_length)
    } else {
      curr_length = 0
    }
  }
  return max_length
}
