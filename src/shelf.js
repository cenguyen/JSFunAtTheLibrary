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

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};