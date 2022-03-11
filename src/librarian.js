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
}

module.exports = Librarian;