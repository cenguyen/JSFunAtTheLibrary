function createLibrary(libraryName) {
  // goal is to create a library object that contains the librrary name
  // 1 parameter - name of library (name dot notation)
  // object should already contain shelves with different genres
  return {
    name: libraryName,
    shelves: {
      "fantasy": [],
      "fiction": [],
      "nonFiction": []
    }
  }
}

function addBook(library, book) {
  // goal is to book to correct shelf
  // 2 parameters library (which is createLibrary and book object)
  // look at genre
  // tests dont test for case where genre does not exist
  let bookGenre = book.genre;
  let addToThisShelf = library.shelves[bookGenre];
  addToThisShelf.push(book);
  return library;
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};