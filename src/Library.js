function createLibrary(libraryName) {
  // goal is to create a library object that contains the librrary name
  // 1 parameter - name of library (name dot notation)
  // object should already contain shelves with different genres
  return {
    name: libraryName,
    "shelves": {
      "fantasy": [],
      "fiction": [],
      "nonFiction": []
    }
  }
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};