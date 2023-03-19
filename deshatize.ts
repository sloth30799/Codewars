// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

const dashatize = (num: number): string | number => {
  num = Math.abs(num)

  if (!num) return num.toString()
  else if (num < 10 && num > -10) return num

  return num
    .toString()
    .split("")
    .map((x, i) => {
      if (Number(x) % 2 !== 0) {
        if (i === 0) {
          x += "-"
        } else if (i === num.toString().length - 1) {
          x = "-" + x
        } else {
          x = "-" + x + "-"
        }
      }
      return x
    })
    .join("")
    .replaceAll("--", "-")
}
