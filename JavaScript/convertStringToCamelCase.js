// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    str = str.replaceAll('-', ' ').replaceAll('_', ' ').split(' ')
    
    return str.map((x, i) => {
      if (i > 0) {
        return x[0].toUpperCase() + x.slice(1)
      } return x
    }).join('')
  }