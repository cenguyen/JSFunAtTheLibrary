// function createLibrary(libraryName) {
//   // goal is to create a library object that contains the librrary name
//   // 1 parameter - name of library (name dot notation)
//   // object should already contain shelves with different genres
//   return {
//     name: libraryName,
//     shelves: {
//       "fantasy": [],
//       "fiction": [],
//       "nonFiction": []
//     }
//   }
// }

let createLibrary = (libraryName) => {
  return { 
    name: libraryName,
    shelves: {
      "fantasy": [],
      "fiction": [],
      "nonFiction": []
    }
  }
}

// function addBook(library, book) {
//   // goal is to book to correct shelf
//   // 2 parameters library (which is createLibrary and book object)
//   // look at genre
//   // tests dont test for case where genre does not exist
//   let bookGenre = book.genre;
//   let addToThisShelf = library.shelves[bookGenre];
//   addToThisShelf.push(book);
//   return library;
// }

let addBook = (library, book) => {
  library.shelves[book.genre].push(book);
  return library;
}

// function checkoutBook(library, bookTitle, bookGenre) {
//   // test is creating a lbrary and adding 3 books using addBook
//   // 3 parameters - lirbary, book name, book genre
//   // check genre first, then check book
//   // remove book from shelf
//   // return check out confirmation 
//   let libraryName = library.name;
//   let thisShelf = library.shelves[bookGenre];
//   // lets try for loop first
//   for (var i = 0; i < thisShelf.length; i++) {
//     if (bookTitle === thisShelf[i].title) {
//       thisShelf.splice(i, 1);
//       return `You have now checked out ${bookTitle} from the ${libraryName}`
//     }
//   }
//   if (thisShelf.includes(bookTitle) === false) {
//     return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName}`;
//   }
// }

let checkoutBook = (library, bookTitle, bookGenre) => {
  let thisShelf = library.shelves[bookGenre];
  for (var i = 0; i < thisShelf.length; i++) {
    if (bookTitle === thisShelf[i].title) {
      thisShelf.splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  if (thisShelf.includes(bookTitle) === false) {
    return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
  }
}


// let checkoutBook = (library, bookTitle, bookGenre) => {
//   let libraryName = library.name;
//   let thisShelf = library.shelves[bookGenre];
//   thisShelf.forEach((book, i) => {
//     if (book.title === bookTitle) {
//       thisShelf.splice(i, 1);
//       return `You have now checked out ${bookTitle} from the ${libraryName}`
//     } else if (thisShelf.includes(bookTitle) === false) {
//       return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName}`;
//     }
//   })
// }


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};