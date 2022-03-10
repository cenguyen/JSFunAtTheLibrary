function createTitle(title) {
  // goal of createTitle is to add "The" to the title
  // create The variable
  // if no title given, return empty?
  let addThe = "The";
  if (!title) {
    return "";
  } else {
    return `${addThe} ${title}`
  }
}

function buildMainCharacter(name, age, pronouns) {
  // goal is to create an object with properties name, age, pronouns
  // parameters are name, age, pronouns
  let charObj = {name, age, pronouns}
  return charObj;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}