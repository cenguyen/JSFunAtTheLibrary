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

function calculatePageCount(title) {
  // goal is to add 20 pages per letter
    // including spaces? dont forget The
  // 1 parameter title
  // call createTitle? 
  // get length of title and multiply by 20
  return title.length * 20;

}

function writeBook(title, character, genre) {
  // ogal is to create a object
  // 3 parameters title, character, genre
  // book object should have property names that match the test cases (look at dot notation)
  let bookObj = {
    title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre
  }
  return bookObj;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}