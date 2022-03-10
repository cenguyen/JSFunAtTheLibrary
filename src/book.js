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

function saveReview(review, reviews) {
  // goal is to add review to an array
  // 2 parameters, review to be added and reviews array
  // it should add new reviews
  // it should only add unique reviews (no dupes)
    // check if reviews exists in array - indexOf? includes?
    // if it does not have it
  if (!reviews.includes(review)) {
    reviews.push(review);
  }
  return reviews;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}