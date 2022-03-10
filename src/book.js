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

module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}