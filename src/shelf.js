function shelfBook(book, shelfName) {
  // takes 2 parameters -object var and name of shelf it should be on
  // goal is to push book obj to the START of array
  // shelf is an array. will already exist in var test
  // shlf cannot hold more than 3 books
  if (shelfName.length < 3) {
    shelfName.unshift(book);
  }
  return shelfName;
}

function unshelfBook(bookName, shelfName) {
  // takes 2 parameters- nname of book and name of shelf
  // needs to search through shelf array and look for title
  // when match is found, splice
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookName) {
      shelfName.splice(i, 1);
    }
  }
  return shelfName;
}

function listTitles(shelfName) {
  // takes 1 parameter - shelf name
  // goal is to return a STRING of all book titles
  // create empty array, loop and push
  let bookTitles = [];
  for (var i = 0; i < shelfName.length; i++) {
    bookTitles.push(shelfName[i].title);
  }
  return bookTitles.join(', ');
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};