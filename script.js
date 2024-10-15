const myLibrary = [];

function Book(name, author, pages, state) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.state = state;
    this.info = function() {
        return (name + " by " + author + ", " + pages + " pages, " + state + ".")
    };
}

function addBookToLibrary() {
    // do stuff here
  }