// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    let leftOver = nbPetals % 6
    if (leftOver === 1 || nbPetals === 1) {
      return "I love you"
    } else if (leftOver === 2 || nbPetals === 2) {
      return "a little"
    } else if (leftOver === 3 || nbPetals === 3) {
      return "a lot"
    } else if (leftOver === 4 || nbPetals === 4) {
      return "passionately"
    } else if (leftOver === 5 || nbPetals === 5) {
      return "madly"
    } else {
      return "not at all"
    }
  }