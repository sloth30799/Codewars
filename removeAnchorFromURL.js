// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// code
function removeUrlAnchor(url){
    url = url.split('')
    const hashIndex = url.findIndex(x => x === '#')
    if (hashIndex === -1) {
      return url.join('')
    } else{
       return url.slice(0 , hashIndex).join('')
    }
  }

//   better
function removeUrlAnchor(url){
    return url.split('#')[0];
  }