class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.isMorning = false;
  }

  // greetPatron takes at least 2 params
  // name and a bool if it is morning or not
  greetPatron(patronName, isMorning) {
    if (isMorning) {
      this.isMorning = true;
      return `Good morning, ${patronName}!`
    } else {
      return `Hello, ${patronName}!`
    }
  }

  // test case creates library and adds book to shelf
  // calling findBook checks shelf (searchShelf?) but returns different string
  findBook(bookTitle) {
    let bookGenres = [];
    let thisShelf = this.library.shelves;
    for (let genre in thisShelf) {
      bookGenres.push(genre);
    }
    for (var i = 0; i < bookGenres.length; i++) {
      if (thisShelf[bookGenres[i]][0].title === bookTitle) {
        thisShelf[bookGenres[i]].splice(i, 1);
        return `Yes, we have ${bookTitle}`;
      } else {
        return `Sorry, we do not have ${bookTitle}`;
      }
    }
  }

  calculateLateFee(lateDays) {
    // returns amount to be paid
    // .25 per day, rounded UP whole integer
    // 1 param - num of day late
    return Math.ceil(lateDays * 0.25);
  }
}


module.exports = Librarian;